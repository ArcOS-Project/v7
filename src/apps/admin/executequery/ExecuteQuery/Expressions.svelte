<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import ExpressionRow from "./Expressions/ExpressionRow.svelte";

  const { process }: { process: IExecuteQueryRuntime } = $props();
  const { expressions, selectedSource } = process;
</script>

<div class="expressions">
  {#each $expressions[$selectedSource] as _, i}
    <ExpressionRow {i} {process} />
  {/each}
</div>
