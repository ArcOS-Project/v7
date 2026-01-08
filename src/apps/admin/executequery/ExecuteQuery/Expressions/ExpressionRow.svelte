<script lang="ts">
  import type { ExecuteQueryRuntime } from "../../runtime";
  import ColumnName from "./ExpressionRow/ColumnName.svelte";
  import ComparisonType from "./ExpressionRow/ComparisonType.svelte";
  import ComparisonValue from "./ExpressionRow/ComparisonValue.svelte";
  import IncompleteWarning from "./ExpressionRow/IncompleteWarning.svelte";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
</script>

<div class="row">
  <p class="where">Where</p>

  <div class="fields">
    <ColumnName {process} {i} />
    <ComparisonType {process} {i} />
    <ComparisonValue {process} {i} />
  </div>

  <IncompleteWarning {process} {i} />

  <div class="actions">
    <button class="lucide icon-copy" title="Duplicate" aria-label="Duplicate" onclick={() => process.duplicateExpression(i)}
    ></button>
    <button class="lucide icon-trash-2" title="Delete" aria-label="Delete" onclick={() => process.deleteExpression(i)}></button>
  </div>
</div>
