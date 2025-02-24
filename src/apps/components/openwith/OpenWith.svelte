<script lang="ts">
  import { ComponentIcon } from "$ts/images/general";
  import Options from "./OpenWith/Options.svelte";
  import type { OpenWithRuntime } from "./runtime";

  const { process }: { process: OpenWithRuntime } = $props();
  const { filename, showAll, available, all, path, selectedId } = process;
</script>

<div class="top">
  <div class="header">
    <h1>Select an app to open {$filename}</h1>
    <p class="location">
      <img src={ComponentIcon} alt="" /><span>{$path}</span>
    </p>
  </div>
  <div class="options">
    {#if $showAll}
      <Options apps={$all} {process} />
    {:else}
      <Options apps={$available} {process} />
    {/if}
    {#if $available && !$available.length && !$showAll}
      <p class="empty">
        You don't have any apps that can open this file! <button
          class="link"
          onclick={() => ($showAll = true)}
        >
          View all
        </button>
      </p>
    {/if}
  </div>
</div>
<div class="bottom">
  <div class="mode">
    <button onclick={() => ($showAll = true)} class:suggested={$showAll}>
      All
    </button>
    <button onclick={() => ($showAll = false)} class:suggested={!$showAll}>
      Compatible
    </button>
  </div>
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button
    class="suggested"
    disabled={!$selectedId}
    onclick={() => process.go()}
  >
    Open
  </button>
</div>
