<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import { QueryUserColumns } from "$apps/admin/executequery/store";
  import type { QueryExpression } from "$apps/admin/executequery/types";
  import BasicComparisonValue from "./ComparisonValue/BasicComparisonValue.svelte";
  import BooleanComparisonValue from "./ComparisonValue/BooleanComparisonValue.svelte";
  import JsonHierarchyComparisonValue from "./ComparisonValue/JsonHierarchyComparisonValue.svelte";
  import UserComparisonValue from "./ComparisonValue/UserComparisonValue.svelte";

  const { process, expression, i }: { process: ExecuteQueryRuntime; expression: QueryExpression; i: number } = $props();
  const { columnName, comparisonType } = expression;
  const { selectedSource, columns, columnTypes } = process;

  const isUser = (columnName && QueryUserColumns.includes(columnName)) || (columnName === "_id" && $selectedSource === "users");
  const isJsonHierarchy =
    columnName &&
    $columnTypes[$columns.indexOf(columnName)] === "object" &&
    (comparisonType?.includes("include") || comparisonType?.includes("equal"));
</script>

{#if comparisonType}
  {#if isUser}
    <UserComparisonValue {process} {i} />
  {:else if comparisonType === "is boolean"}
    <BooleanComparisonValue {process} {expression} {i} />
  {:else if isJsonHierarchy}
    <JsonHierarchyComparisonValue {process} {expression} {i} />
  {:else if comparisonType.includes("defined")}
    <span>?</span>
  {:else}
    <BasicComparisonValue {process} {i} />
  {/if}
{/if}
