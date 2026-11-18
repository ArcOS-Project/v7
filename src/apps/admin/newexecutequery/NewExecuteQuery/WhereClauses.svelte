<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import WhereClause from "./WhereClauses/WhereClause.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { whereClauses, selectedCollection, selectedColumns } = process;
</script>

<div class="where-clauses">
  {#if $selectedColumns[$selectedCollection]?.length}
    {#each $whereClauses[$selectedCollection] ?? [] as clause, i (`${clause.uuid}-${i}`)}
      <WhereClause {process} {i} />
    {/each}
  {/if}
</div>
