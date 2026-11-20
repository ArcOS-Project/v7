<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import type { DbQueryCollectionColumn, DbQueryWhere } from "$types/server/admin";
  import { onMount } from "svelte";
  import BooleanValueEntry from "./ValueEntries/BooleanValueEntry.svelte";
  import GenericValueEntry from "./ValueEntries/GenericValueEntry.svelte";
  import HierarchialValueEntry from "./ValueEntries/HierarchialValueEntry.svelte";
  import UserValueEntry from "./ValueEntries/UserValueEntry.svelte";

  let {
    process,
    i,
    isHierarchial = $bindable(),
  }: { process: INewExecuteQueryRuntime; i: number; isHierarchial: boolean } = $props();
  const { selectedColumns, whereClauses, selectedCollection, USER_COLUMNS } = process;

  let clauseInfo = $state<DbQueryWhere | undefined>();
  let columnInfo = $state<DbQueryCollectionColumn>();
  let isUserColumn = $state(false);

  function update() {
    clauseInfo = $whereClauses[$selectedCollection][i];
    columnInfo = $selectedColumns[$selectedCollection].find((column) => column.column === clauseInfo?.columnName);
    isUserColumn =
      (columnInfo && USER_COLUMNS.includes(columnInfo.column)) ||
      (columnInfo?.column === "_id" && $selectedCollection === "users");
    isHierarchial =
      columnInfo?.normalizedType === "object" &&
      (clauseInfo?.mode.toLowerCase().includes("include") || clauseInfo?.mode.includes("EqualTo"));
  }

  onMount(() => {
    const subs = [selectedColumns, whereClauses, selectedCollection].map((store) => store.subscribe(update));
    update();

    return () => {
      subs.forEach((sub) => sub?.());
    };
  });
</script>

{#if clauseInfo?.mode && clauseInfo.columnName}
  {#if isUserColumn}
    <UserValueEntry {process} {i} />
  {:else if clauseInfo.mode === "isBoolean"}
    <BooleanValueEntry {process} {i} />
  {:else if isHierarchial}
    <HierarchialValueEntry {process} {i} />
  {:else if clauseInfo.mode.includes("Defined")}
    <p>?</p>
  {:else}
    <GenericValueEntry {process} {i} />
  {/if}
{/if}
