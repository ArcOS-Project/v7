<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import Expressions from "./ExecuteQuery/Expressions.svelte";
  import QueryResult from "./ExecuteQuery/QueryResult.svelte";
  import QuerySentence from "./ExecuteQuery/QuerySentence.svelte";
  import SelectorBar from "./ExecuteQuery/SelectorBar.svelte";

  const { process }: { process: IExecuteQueryRuntime } = $props();
  const { selectedSource, result, loading } = process;
</script>

<SelectorBar {process} />
{#if $selectedSource}
  <Expressions {process} />
{/if}
{#if $result?.length}
  <QueryResult {process} />
{:else}
  <QuerySentence {process} />
{/if}

{#if $loading}
  <div class="loading-overlay" class:show={$loading}>
    <Spinner height={32} />
    <p>Collecting information</p>
  </div>
{/if}
