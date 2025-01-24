<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import PinnedApp from "./PinnedApps/PinnedApp.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;

  let pins = $state<string[]>([]);

  userPreferences.subscribe((v) => {
    pins = v.shell.taskbar.pinnedApps || [];
  });

  // TODO: pinned apps UI instead of manual injection
</script>

<div class="pinned-apps">
  {#each pins as appId}
    <PinnedApp {appId} {process} />
  {/each}
</div>
