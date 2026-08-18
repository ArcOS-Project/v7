<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import ErrorList from "./Sqeleton/ErrorList.svelte";
  import HistoryList from "./Sqeleton/HistoryList.svelte";
  import Intro from "./Sqeleton/Intro.svelte";
  import OpenedEditors from "./Sqeleton/OpenedEditors.svelte";
  import ResultList from "./Sqeleton/ResultList.svelte";
  import Sidebar from "./Sqeleton/Sidebar.svelte";
  import SqlEditor from "./Sqeleton/SqlEditor.svelte";
  import StatusBar from "./Sqeleton/StatusBar.svelte";
  import Tabs from "./Sqeleton/Tabs.svelte";

  const { process }: { process: ISqeletonRuntime } = $props();
  const { openedFile, currentTab, queries, queryIndex } = process;

  let syntaxError = $state(false);
</script>

{#if $openedFile}
  <div class="top">
    <Sidebar {process} />
    <div class="main-content">
      <OpenedEditors {process} />
      <div class="action-bar">
        <button
          class="run"
          disabled={!$queries[$queryIndex]?.content}
          onclick={() => process.executeSql($queries[$queryIndex]?.content)}
        >
          <span class="lucide icon-play"></span>
          <span>Run SQL</span>
        </button>
        <div class="syntax-check" class:problem={syntaxError}>
          {#if syntaxError}
            <span class="lucide icon-circle-alert"></span>
            <span>Syntax error in query!</span>
          {:else}
            <span class="lucide icon-check"></span>
            <span>Query is valid.</span>
          {/if}
        </div>
      </div>
      <SqlEditor {process} bind:syntaxError />

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
  <StatusBar {process} />
{:else}
  <Intro {process} />
{/if}
