<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import type { SqeletonRuntime } from "./runtime";
  import Intro from "./Sqeleton/Intro.svelte";

  const { process }: { process: SqeletonRuntime } = $props();
  const { sqlCode, openedFile, errors } = process;

  let tab = $state("result");
</script>

{#if $openedFile}
  <div class="main-content">
    <div class="sidebar">
      <div class="tables">
        <h1>Tables</h1>
      </div>
      <div class="queries">
        <h1>Queries</h1>
      </div>
    </div>
    <div class="editor">
      <div class="action-bar"></div>
      <CodeEditor language="sql" value={sqlCode} />
      <div class="bottom-pane">
        <div class="tabs">
          <button class:active={tab === "result"} onclick={() => (tab = "result")}>Result</button>
          <button class:active={tab === "errors"} onclick={() => (tab = "errors")}>
            <span>Errors</span>
            {#if $errors.length}
              <span class="count">{$errors.length}</span>
            {/if}
          </button>
        </div>
        <div class="pane-content">
          {#if tab === "result"}
            result
          {:else if tab === "errors"}
            errors
          {/if}
        </div>
      </div>
    </div>
  </div>
{:else}
  <Intro {process} />
{/if}
