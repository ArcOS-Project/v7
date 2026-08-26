<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import Query from "./OpenedEditors/Query.svelte";

  let { process }: { process: ISqeletonRuntime } = $props();
  const { queries, queryIndex } = process;
</script>

<div class="opened-editors">
  {#each $queries as query, i (query.id)}
    <Query {process} {query} {i}/>
  {/each}
</div>
