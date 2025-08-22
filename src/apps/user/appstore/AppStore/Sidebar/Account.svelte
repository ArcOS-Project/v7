<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { AppStoreRuntime } from "../../runtime";

  const { process }: { process: AppStoreRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="account">
  <ProfilePicture height={32} userDaemon={process.userDaemon} />
  <div>
    <h1>{$userPreferences.account.displayName || process.username}</h1>
    <p>{process.userDaemon?.userInfo.email}</p>
  </div>
</div>
