<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queryHistory } = process;
</script>

{#each $queryHistory.reverse() as query, i}
  <button class="query-row" onclick={() => process.newQuery(query)}>
    <span class="lucide icon-scroll-text"></span>
    <span class="query">{query}</span>
    <span class="index">#{$queryHistory.length - i}</span>
  </button>
{/each}
