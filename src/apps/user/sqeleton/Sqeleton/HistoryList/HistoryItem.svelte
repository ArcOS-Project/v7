<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import HighlightComponent from "$lib/HighlightComponent.svelte";
  import type { SqeletonHistoryItem } from "../../types";

  const { query, process, i }: { query: SqeletonHistoryItem; process: ISqeletonRuntime; i: number } = $props();
  const { queryHistory } = process;
  let expand = $state(false);
</script>

<div class="query-row" class:system={query.system} class:expand>
  <button
    class="lucide"
    class:icon-chevron-right={!expand}
    class:icon-chevron-down={expand}
    aria-label="Expand query"
    onclick={() => (expand = !expand)}
  ></button>
  <span class="lucide icon-scroll-text"></span>
  <span class="query"><HighlightComponent language="sql" src={query.sql} /></span>
  <span class="index">#{$queryHistory.length - i}</span>
</div>
