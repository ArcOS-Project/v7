<script lang="ts">
  import HighlightComponent from "$lib/HighlightComponent.svelte";
  import { UUID } from "$ts/util/uuid";
  import type { SqeletonRuntime } from "../../runtime";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queries, queryIndex } = process;
</script>

{#if $queries.length}
  <details class="queries" open>
    <summary>
      <span class="lucide icon-chevron-right"></span>
      <h1>
        <span>Queries</span>
        <button class="lucide icon-plus" onclick={() => process.newQuery()} aria-label="New query" title="New query"></button>
      </h1>
    </summary>
    {#each $queries as query, i (`${i}-${query}-${UUID()}`)}
      <div class="query" class:selected={$queryIndex === i}>
        <button onclick={() => ($queryIndex = i)}>
          <span class="lucide icon-scroll-text"></span>
          <span>
            <HighlightComponent language="sql" src={query.trim() || "Fresh query"} />
          </span>
        </button>
        <button
          class="lucide icon-x"
          onclick={() => process.deleteQuery(i)}
          title="Delete query"
          aria-label="Delete query"
          disabled={$queries.length <= 1}
        ></button>
      </div>
    {/each}
  </details>
{/if}
