<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";

  const { appId, process }: { appId: string; process: AppInfoRuntime } = $props();
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
    <ActionButton onclick={() => process.openPermissions()}>Permissions</ActionButton>
    <ActionButton onclick={() => process.killAll()}>Kill all</ActionButton>
    <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
  {/snippet}
</ActionBar>
