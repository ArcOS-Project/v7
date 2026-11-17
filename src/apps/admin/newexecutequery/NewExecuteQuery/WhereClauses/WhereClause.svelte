<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ColumnSelector from "./WhereClause/ColumnSelector.svelte";
  import WhereClauseModeSelector from "./WhereClauseModeSelector.svelte";
  import WhereClauseValueEntry from "./WhereClauseValueEntry.svelte";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { whereClauses, selectedCollection } = process;

  let isHierarchial = $state<boolean>(false);
</script>

<div class="bar where-clause">
  <h1>{!i ? "Where" : "And where"}:</h1>
  <div class="options">
    <ColumnSelector {process} {i} />

    {#if isHierarchial}
      <input
        bind:value={$whereClauses[$selectedCollection][i].hierarchyKey}
        placeholder="Hierarchy..."
        title={$whereClauses[$selectedCollection][i].hierarchyKey}
      />
    {/if}

    {#if $whereClauses[$selectedCollection][i].columnName}
      <WhereClauseModeSelector {process} {i} />
    {/if}

    <WhereClauseValueEntry {process} {i} bind:isHierarchial />
  </div>
  <div class="actions">
    <ActionIconButton icon="copy" onclick={() => process.DuplicateClause(i)} title="Duplicate clause"></ActionIconButton>
    <ActionIconButton icon="trash-2" onclick={() => process.DeleteClause(i)} title="Delete clause"></ActionIconButton>
  </div>
</div>
