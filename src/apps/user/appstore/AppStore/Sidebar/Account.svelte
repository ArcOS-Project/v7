<script lang="ts">
  import type { IAppStoreRuntime } from "$interfaces/runtimes/IAppStoreRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/env";

  const { process }: { process: IAppStoreRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="account">
  <ProfilePicture height={32} />
  <div>
    <h1>{$userPreferences.account.displayName || process.username}</h1>
    <p>{Daemon?.userInfo.email}</p>
  </div>
</div>
