<script lang="ts">
  import { ProfilePictures } from "$ts/images/pfp";
  import { DefaultUserInfo } from "$ts/server/user/default";
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences, currentPage, userDaemon } = process;
  const userInfo = userDaemon?.userInfo || DefaultUserInfo;

  let pfp = $state(ProfilePictures.def);

  $effect(() => {
    const sub = userPreferences.subscribe(async (v) => {
      pfp = await userDaemon?.getProfilePicture(v.account.profilePicture!)!;
    });

    return () => sub();
  });
</script>

<button
  class="account-button"
  onclick={() => process.switchPage("account")}
  class:selected={$currentPage === "account"}
>
  <img src={pfp} alt="" />
  <div class="info">
    <p class="account-name">
      {$userPreferences.account.displayName || userInfo.username}
    </p>
    <p class="email">{userInfo.email}</p>
  </div>
</button>
