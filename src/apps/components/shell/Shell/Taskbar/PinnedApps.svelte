<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import PinnedApp from "./PinnedApps/PinnedApp.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;

  let pins = $state<string[]>([]);

  userPreferences.subscribe((v) => {
    pins =
      v.pinnedApps.filter((appId) => {
        if (v.disabledApps.includes(appId)) return false;
        return true;
      }) || [];
  });
</script>

{#if pins.length}
  <div class="pinned-apps">
    {#each pins as appId (appId)}
      <PinnedApp {appId} {process} />
    {/each}
  </div>
{/if}
