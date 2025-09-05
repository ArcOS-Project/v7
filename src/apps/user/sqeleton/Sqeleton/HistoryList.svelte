<script lang="ts">
  import { sortByKey } from "$ts/util";
  import type { SqeletonRuntime } from "../runtime";
  import HistoryItem from "./HistoryList/HistoryItem.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queryHistory } = process;

  let showSystem = $state(false);
</script>

<div class="filter-row">
  <button onclick={() => ($queryHistory = [])}>Clear history</button>
  <div class="sep"></div>
  <label>
    <input type="checkbox" name="" id="" bind:checked={showSystem} />
    Show system queries
  </label>
</div>
{#each sortByKey($queryHistory, "timestamp")
  .reverse()
  .filter((q) => (showSystem ? true : !q.system)) as query, i (query.uuid)}
  <HistoryItem {query} {process} {i} />
{/each}
