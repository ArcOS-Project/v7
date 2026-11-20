<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { selectedCollection, selectedColumns, loading, whereClauses } = process;

  function clear() {
    $whereClauses[$selectedCollection] = [];
    $selectedColumns[$selectedCollection] = [];
  }
</script>

<ActionBar>
  {#snippet leftContent()}
    <ActionIconButton icon="folder-open" title="Load query..." onclick={() => process.DoLoadQueryFromFile()} />
    <ActionIconButton icon="save" title="Save query..." onclick={() => process.DoSaveQueryToFile()} />
  {/snippet}
  {#snippet rightContent()}
    {#if !$loading && $selectedCollection}
      <ActionButton onclick={clear}>Clear</ActionButton>
      <ActionButton
        icon="plus"
        onclick={() => process.AddWhereClause()}
        disabled={!$selectedColumns[$selectedCollection]?.length}
      >
        Add where
      </ActionButton>
      <ActionButton
        icon="play"
        suggested
        onclick={() => process.Execute()}
        disabled={!$selectedColumns[$selectedCollection]?.length || !$whereClauses[$selectedCollection]}
      >
        Execute
      </ActionButton>
    {/if}
  {/snippet}
</ActionBar>
