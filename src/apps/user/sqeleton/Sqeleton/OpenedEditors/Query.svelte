<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount } from "svelte";
  import type { SqeletonOpenedQuery } from "../../types";

  let { process, query, i }: { process: ISqeletonRuntime; query: SqeletonOpenedQuery; i: number } = $props();
  const { queryIndex } = process;

  let unsubscribe: Unsubscriber;
  let queryButton = $state<HTMLButtonElement>();

  onMount(() => {
    unsubscribe = queryIndex.subscribe((v) => {
      if (v === i) queryButton?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    });
  });

  onDestroy(() => {
    unsubscribe?.();
  });
</script>

<button
  class="query"
  onclick={() => ($queryIndex = i)}
  class:selected={$queryIndex === i}
  bind:this={queryButton}
  onauxclick={() => process.closeQueryAck(i)}
>
  <span class="lucide icon-database"></span>
  <span>{query.filename}</span>
  {#if query.hasChanges}
    <div class="dot"></div>
  {/if}
</button>
