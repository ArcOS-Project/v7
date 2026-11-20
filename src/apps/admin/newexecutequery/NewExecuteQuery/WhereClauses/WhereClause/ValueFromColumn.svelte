<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import type { DbQueryCollectionColumn } from "$types/server/admin";
  import { onMount } from "svelte";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { whereClauses, selectedCollection, selectedColumns, allowSensitiveColumns, columns } = process;

  let selectedColumnInfo = $state<DbQueryCollectionColumn | undefined>();

  function updateSelectedColumnInfo() {
    const columnName = $whereClauses[$selectedCollection][i].valueFromColumn?.columnName;
    if (!columnName) {
      selectedColumnInfo = undefined;
      return;
    }

    selectedColumnInfo = $columns.find((info) => info.column === columnName);
  }

  onMount(() => {
    const subs = [whereClauses, selectedCollection].map((store) => store.subscribe(updateSelectedColumnInfo));

    return () => subs.forEach((sub) => sub?.());
  });
</script>



<p>Value of:  </p>

<select bind:value={$whereClauses[$selectedCollection][i].valueFromColumn!.columnName}>
  <option value="" selected disabled>(select source column)</option>
  {#each $selectedColumns[$selectedCollection] as column (column.column)}
    <option value={column.column} disabled={column.sensitive && !allowSensitiveColumns}>{column.column}</option>
  {/each}
</select>

{#if selectedColumnInfo?.normalizedType === "object"}
  <input
    type="text"
    placeholder="Hierarchy (optional)"
    bind:value={$whereClauses[$selectedCollection][i].valueFromColumn!.hierarchy}
  />
{/if}
