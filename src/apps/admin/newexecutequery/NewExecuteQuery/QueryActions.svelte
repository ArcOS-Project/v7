<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { selectedCollection, selectedColumns, whereClauses } = process;

  function clear() {
    $whereClauses[$selectedCollection] = [];
    $selectedColumns[$selectedCollection] = [];
  }
</script>

<ActionBar>
  {#snippet leftContent()}
    <ActionIconButton icon="folder-open" title="Load query..."></ActionIconButton>
    <ActionIconButton icon="save" title="Save query..."></ActionIconButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => ($selectedColumns[$selectedCollection] = [])}>Clear</ActionButton>
    <ActionButton icon="plus" onclick={() => process.AddWhereClause()} disabled={!$selectedColumns[$selectedCollection]?.length}>
      Add where
    </ActionButton>
    <ActionButton icon="play" suggested onclick={() => process.Execute()}>Execute</ActionButton>
  {/snippet}
</ActionBar>
