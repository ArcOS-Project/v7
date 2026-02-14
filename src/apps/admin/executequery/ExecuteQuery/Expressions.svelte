<script lang="ts">
  import type { ExecuteQueryRuntime } from "../runtime";
  import ExpressionRow from "./Expressions/ExpressionRow.svelte";

  const { process }: { process: ExecuteQueryRuntime } = $props();
  const { expressions, selectedSource } = process;
</script>

<div class="expressions">
  {#each $expressions[$selectedSource] as _, i}
    <ExpressionRow {i} {process} />
  {/each}
</div>
