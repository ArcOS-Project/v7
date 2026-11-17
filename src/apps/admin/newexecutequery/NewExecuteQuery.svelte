<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import ColumnsBar from "./NewExecuteQuery/ColumnsBar.svelte";
  import Sidebar from "./NewExecuteQuery/Sidebar.svelte";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { loading } = process;
</script>

<Sidebar {process} />
<div class="container" class:loading={$loading}>
  <CustomTitlebar {process} />
  {#if !$loading}
    <ColumnsBar {process} />
  {:else}
    <div class="spinner-center">
      <Spinner height={32} />
    </div>
  {/if}
</div>
