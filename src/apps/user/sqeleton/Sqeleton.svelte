<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import { Pane, Splitpanes } from "svelte-splitpanes";
  import type { SqeletonRuntime } from "./runtime";
  import ErrorList from "./Sqeleton/ErrorList.svelte";
  import HistoryList from "./Sqeleton/HistoryList.svelte";
  import Intro from "./Sqeleton/Intro.svelte";
  import ResultList from "./Sqeleton/ResultList.svelte";
  import Sidebar from "./Sqeleton/Sidebar.svelte";
  import StatusBar from "./Sqeleton/StatusBar.svelte";
  import Tabs from "./Sqeleton/Tabs.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queries, queryIndex, openedFile, currentTab } = process;

  let sqlCode = Store<string>("");
  let syncLock = $state(false);
  let syntaxError = $state(false);

  onMount(() => {
    sqlCode.subscribe(async (v) => {
      if (syncLock) return (syncLock = false);
      $queries[$queryIndex] = v ?? "";
      syntaxError = await process.hasSyntaxError(v);
    });

    queryIndex.subscribe((v) => {
      $sqlCode = $queries[v] ?? "";
    });

    queries.subscribe((v) => {
      if (v[$queryIndex] !== $sqlCode) {
        $sqlCode = v[$queryIndex] ?? "";
      }
    });
  });
</script>

{#if $openedFile}
  <div class="main-content">
    <Splitpanes>
      <Pane size={20} minSize={15} maxSize={80}>
        <Sidebar {process} />
      </Pane>
      <Pane size={80} maxSize={85} minSize={20}>
        <div class="editor">
          <Splitpanes horizontal>
            <Pane size={75}>
              <div class="action-bar">
                <button class="run" disabled={!$sqlCode} onclick={() => process.execute($sqlCode)}>
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
              <CodeEditor language="sql" value={sqlCode} />
            </Pane>
            <Pane size={25}>
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
            </Pane>
          </Splitpanes>
        </div>
      </Pane>
    </Splitpanes>
  </div>
  <StatusBar {process} />
{:else}
  <Intro {process} />
{/if}
