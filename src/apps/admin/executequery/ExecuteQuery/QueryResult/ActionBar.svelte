<script lang="ts">
  import type { ExecuteQueryRuntime } from "../../runtime";

  const { process }: { process: ExecuteQueryRuntime } = $props();
  const { result, truncated, totalCount } = process;
</script>

<div class="action-bar">
  <p class="count">{$result?.length}/{$totalCount} results</p>
  {#if $truncated}
    <div class="truncated">
      <img src={process.getIconCached("ErrorIcon")} alt="" />
      <span>Result truncated: too many items ({$totalCount} &gt 1000)</span>
    </div>
  {/if}
  <button onclick={() => process.exportResults()}>Export</button>
  <button onclick={() => ($result = [])}>Clear</button>
</div>
