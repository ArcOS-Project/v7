<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import type { BugReport } from "$types/bughunt";
  import type { BugHuntRuntime } from "../runtime";

  const { process, report }: { process: BugHuntRuntime; report: BugReport | undefined } = $props();
</script>

<ActionBar>
  {#snippet leftContent()}
    <ActionButton icon="plus" onclick={() => process.newReport()} suggested>New report...</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    {#if report}
      <ActionGroup>
        <ActionIconButton
          icon="scroll-text"
          disabled={!report.logs.length}
          onclick={() => process.viewLogs()}
          title="View logs"
        />
        <ActionIconButton icon="braces" disabled={!report.userData} onclick={() => process.userData()} title="View user data" />
        <ActionIconButton icon="save" onclick={() => process.exportReport()} title="Export bug report..." />
      </ActionGroup>
      <ActionSeparator />
    {/if}
    <ActionIconButton icon="refresh-cw" onclick={() => process.invalidateCaches(true)} title="Refresh caches" />
  {/snippet}
</ActionBar>
