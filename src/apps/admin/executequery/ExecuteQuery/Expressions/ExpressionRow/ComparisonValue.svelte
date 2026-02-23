<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import { QueryUserColumns } from "$apps/admin/executequery/store";
  import BasicComparisonValue from "./ComparisonValue/BasicComparisonValue.svelte";
  import BooleanComparisonValue from "./ComparisonValue/BooleanComparisonValue.svelte";
  import JsonHierarchyComparisonValue from "./ComparisonValue/JsonHierarchyComparisonValue.svelte";
  import UserComparisonValue from "./ComparisonValue/UserComparisonValue.svelte";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, columns, columnTypes, expressions } = process;
</script>

{#if $expressions[$selectedSource][i].comparisonType}
  {#if ($expressions[$selectedSource][i].columnName && QueryUserColumns.includes($expressions[$selectedSource][i].columnName)) || ($expressions[$selectedSource][i].columnName === "_id" && $selectedSource === "users")}
    <UserComparisonValue {process} {i} />
  {:else if $expressions[$selectedSource][i].comparisonType === "is boolean"}
    <BooleanComparisonValue {process} {i} />
  {:else if $columns && $expressions[$selectedSource][i].columnName && $columnTypes[$columns.indexOf($expressions[$selectedSource][i].columnName)] === "object" && ($expressions[$selectedSource][i].comparisonType?.includes("include") || $expressions[$selectedSource][i].comparisonType?.includes("equal"))}
    <JsonHierarchyComparisonValue {process} {i} />
  {:else if $expressions[$selectedSource][i].comparisonType.includes("defined")}
    <p>?</p>
  {:else}
    <BasicComparisonValue {process} {i} />
  {/if}
{/if}
