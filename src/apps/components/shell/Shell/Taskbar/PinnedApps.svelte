<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import PinnedApp from "./PinnedApps/PinnedApp.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="pinned-apps">
  {#each $userPreferences.shell.taskbar.pinnedApps as appId}
    <PinnedApp {appId} {process} />
  {/each}
</div>
