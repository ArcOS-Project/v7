<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import Icon from "$lib/Icon.svelte";

  const { process }: { process: IExecuteQueryRuntime } = $props();
  const { result, truncated, totalCount } = process;
</script>

<div class="action-bar">
  <p class="count">{$result?.length}/{$totalCount} results</p>
  {#if $truncated}
    <div class="truncated">
      <Icon icon="ErrorIcon" />
      <span>Result truncated: too many items ({$totalCount} &gt 1000)</span>
    </div>
  {/if}
  <button onclick={() => process.exportResults()}>Export</button>
  <button onclick={() => ($result = [])}>Clear</button>
</div>
