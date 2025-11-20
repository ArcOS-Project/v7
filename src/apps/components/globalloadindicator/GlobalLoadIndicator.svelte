<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { GlobalLoadIndicatorRuntime } from "./runtime";

  const { process }: { process: GlobalLoadIndicatorRuntime } = $props();
  const { caption, progress } = process;
</script>

<div class="top">
  <p class="caption">
    {#if $progress?.useHtml}
      {@html $caption}
    {:else}
      {$caption}
    {/if}
  </p>
  <Spinner height={32} />
</div>
{#if $progress}
  <div class="bottom">
    <div class="progress-bar">
      <div class="inner" style="--value: {(100 / $progress.max) * $progress.value}%"></div>
    </div>
  </div>
{/if}
