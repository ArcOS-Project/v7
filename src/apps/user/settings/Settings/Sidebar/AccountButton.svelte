<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/daemon";
  import { DefaultUserInfo } from "$ts/user/default";
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences, currentPage } = process;
  const userInfo = Daemon?.userInfo || DefaultUserInfo;
</script>

<button class="account-button" onclick={() => process.switchPage("account")} class:selected={$currentPage === "account"}>
  <ProfilePicture height={32} />
  <div class="info">
    <p class="account-name">
      {$userPreferences.account.displayName || userInfo.username}
    </p>
    <p class="email">{userInfo.email}</p>
  </div>
</button>
