<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import ColumnsBar from "./NewExecuteQuery/ColumnsBar.svelte";
  import QueryActions from "./NewExecuteQuery/QueryActions.svelte";
  import Sidebar from "./NewExecuteQuery/Sidebar.svelte";
  import WhereClauses from "./NewExecuteQuery/WhereClauses.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { loading, selectedCollection, selectedColumns } = process;
</script>

<Sidebar {process} />
<div class="container" class:loading={$loading}>
  <CustomTitlebar {process} />
  {#if !$loading}
    <ColumnsBar {process} />
    <div class="bar">
      <h1>From:</h1>
      <p>{$selectedCollection}</p>
    </div>
    <WhereClauses {process} />
    <QueryActions {process} />
  {:else}
    <div class="spinner-center">
      <Spinner height={32} />
    </div>
  {/if}
</div>
