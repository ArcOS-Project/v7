<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import ColumnsBar from "./NewExecuteQuery/ColumnsBar.svelte";
  import OrderBy from "./NewExecuteQuery/OrderBy.svelte";
  import QueryActions from "./NewExecuteQuery/QueryActions.svelte";
  import SelectSavedQuery from "./NewExecuteQuery/SelectSavedQuery.svelte";
  import Sidebar from "./NewExecuteQuery/Sidebar.svelte";
  import WhereClauses from "./NewExecuteQuery/WhereClauses.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { refreshing: loading, selectedCollection, selectSavedQuery } = process;
</script>

<Sidebar {process} />
<div class="container" class:loading={$loading}>
  <CustomTitlebar {process} />
  {#if $loading}
    <div class="loading-wrapper">
      <Spinner height={32} />
    </div>
  {:else if $selectSavedQuery}
    <SelectSavedQuery {process} />
  {:else if $selectedCollection}
    <ColumnsBar {process} />
    <div class="bar">
      <h1>From:</h1>
      <p>{$selectedCollection}</p>
    </div>
    <WhereClauses {process} />
    <OrderBy {process} />
  {:else}
    <p class="no-collection">
      Select a collection or&nbsp;<button class="link" onclick={() => process.DoLoadQueryFromFile()}>load</button>
    </p>
  {/if}
  <QueryActions {process} />
</div>
