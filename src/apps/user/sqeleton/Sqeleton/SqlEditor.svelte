<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import { onMount } from "svelte";

  let {
    process,
    syntaxError = $bindable<boolean>(false),
  }: {
    process: ISqeletonRuntime;
    syntaxError: boolean;
  } = $props();
  let { queries, queryIndex } = process;

  onMount(() => {
    queries.subscribe(async (v) => {
      const content = v[$queryIndex]?.content;

      if (content) syntaxError = await process.hasSyntaxError(content);
      else syntaxError = false;
    });
  });
</script>

<div class="sql-editor">
  {#if $queries[$queryIndex]}
    <textarea
      bind:value={$queries[$queryIndex].content}
      placeholder="SELECT * FROM ..."
      oninput={() => ($queries[$queryIndex].hasChanges = true)}
    ></textarea>
  {/if}
</div>
