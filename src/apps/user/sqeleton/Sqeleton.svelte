<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import type { SqeletonRuntime } from "./runtime";
  import Intro from "./Sqeleton/Intro.svelte";
  import Sidebar from "./Sqeleton/Sidebar.svelte";
  import ResultList from "./Sqeleton/ResultList.svelte";
  import ErrorList from "./Sqeleton/ErrorList.svelte";
  import HistoryList from "./Sqeleton/HistoryList.svelte";
  import Tabs from "./Sqeleton/Tabs.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queries, queryIndex, openedFile, currentTab } = process;

  let sqlCode = Store<string>("");
  let syncLock = $state(false);

  onMount(() => {
    sqlCode.subscribe((v) => {
      if (syncLock) return (syncLock = false);
      $queries[$queryIndex] = v ?? "";
    });

    queryIndex.subscribe((v) => {
      $sqlCode = $queries[v] ?? "";
    });

    queries.subscribe((v) => {
      if (v[$queryIndex] !== $sqlCode) $sqlCode = v[$queryIndex] ?? "";
    });
  });
</script>

{#if $openedFile}
  <div class="main-content">
    <Sidebar {process} />
    <div class="editor">
      <div class="action-bar">
        <button class="run" disabled={!$sqlCode} onclick={() => process.execute($sqlCode)}>
          <span class="lucide icon-play"></span>
          <span>Run SQL</span>
        </button>
      </div>
      <CodeEditor language="sql" value={sqlCode} />
      <div class="bottom-pane">
        <Tabs {process} />
        <div class="pane-content {$currentTab}">
          {#if $currentTab === "result"}
            <ResultList {process} />
          {:else if $currentTab === "errors"}
            <ErrorList {process} />
          {:else if $currentTab === "history"}
            <HistoryList {process} />
          {/if}
        </div>
      </div>
    </div>
  </div>
{:else}
  <Intro {process} />
{/if}
