<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/env";
  import { DefaultUserInfo } from "$ts/user/default";
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";

  const { process }: { process: ISettingsRuntime } = $props();
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
