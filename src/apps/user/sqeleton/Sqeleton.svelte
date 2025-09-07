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
  import { DbMimeIcon } from "$ts/images/mime";
  import { Plural } from "$ts/util";
  import { formatBytes } from "$ts/fs/util";
  import { Pane, Splitpanes } from "svelte-splitpanes";

  const { process }: { process: SqeletonRuntime } = $props();
  const { queries, queryIndex, openedFile, currentTab, openedFileName, result, errors, tables, queryHistory, working } = process;

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
  <div class="status-bar">
    <div class="segment filename">
      <img src={DbMimeIcon} alt="" />
      <span>{$openedFileName}</span>
    </div>
    <div class="segment query-index">
      In query #{$queryIndex}
    </div>
    <div class="segment query-size">
      {formatBytes($sqlCode.length)}
    </div>

    <div class="segment stats">
      <div class="stat" title="{$result?.length || 0} {Plural('result', $result?.length || 0)}">
        <span class="lucide icon-circle-arrow-up"></span>
        <span>{$result?.length || 0}</span>
      </div>
      <div class="stat" title="{$errors?.length || 0} {Plural('error', $errors?.length || 0)}">
        <span class="lucide icon-triangle-alert"></span>
        <span>{$errors?.length || 0}</span>
      </div>
      <div class="stat" title="{$tables?.length || 0} {Plural('table', $tables?.length || 0)}">
        <span class="lucide icon-table"></span>
        <span>{$tables?.length || 0}</span>
      </div>
      <div class="sep"></div>
      <div class="stat" title="{$queryHistory?.length || 0} {Plural('execution', $queryHistory?.length || 0)}">
        <span class="lucide icon-history"></span>
        <span>{$queryHistory?.length || 0}</span>
      </div>
      <div class="stat" title="{$tables?.length || 0} queries">
        <span class="lucide icon-scroll-text"></span>
        <span>{$queries.length}</span>
      </div>
    </div>
    <div class="segment status">{$working ? "Working..." : "Ready!"}</div>
  </div>
{:else}
  <Intro {process} />
{/if}
