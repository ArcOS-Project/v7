<script lang="ts">
  import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { onMount } from "svelte";

  const { appId, process }: { appId: string; process: IAppInfoRuntime } = $props();
  const { userPreferences } = process;

  let disabled = $state(false);

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      disabled = v.disabledApps.includes(appId);
    });

    () => sub();
  });
</script>

<ActionBar floating>
  {#snippet leftContent()}
    <ActionSubtle mono text={appId} />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.killAll()}>Kill all</ActionButton>
    <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
  {/snippet}
</ActionBar>
