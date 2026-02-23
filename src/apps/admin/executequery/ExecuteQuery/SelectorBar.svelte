<script lang="ts">
  import type { ExecuteQueryRuntime } from "../runtime";
  import { QuerySources } from "../store";

  const { process }: { process: ExecuteQueryRuntime } = $props();
  const { selectedSource } = process;
</script>

<div class="selector">
  <p class="from">Select from</p>

  <select bind:value={$selectedSource}>
    {#each QuerySources as source (source)}
      <option value={source} disabled={!source} selected={!source}>{source || "Source..."}</option>
    {/each}
  </select>

  <div class="actions">
    <button class="add" disabled={!$selectedSource} onclick={() => process.addExpression()}>
      <span class="lucide icon-plus"></span>
      <span>Add expression</span>
    </button>

    <button class="run" disabled={!$selectedSource} onclick={() => process.executeQuery()}>
      <span class="lucide icon-play"></span>
      <span>Execute...</span>
    </button>
  </div>
</div>
