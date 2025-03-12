<script lang="ts">
  import { DefaultMimeIcon } from "$ts/images/mime";
  import Options from "./OpenWith/Options.svelte";
  import type { OpenWithRuntime } from "./runtime";

  const { process }: { process: OpenWithRuntime } = $props();
  const { filename, viewMode, available, all, path, selectedId, userDaemon, apps } = process;
</script>

<div class="top">
  <div class="header">
    <h1>Select an app to open {$filename}</h1>
    <p class="location">
      <img src={userDaemon!.getMimeIconByFilename($path) || DefaultMimeIcon} alt="" /><span>{$path}</span>
    </p>
  </div>
  <div class="options">
    {#if $viewMode === "all"}
      <Options apps={$all} {process} />
    {:else if $viewMode === "compatible"}
      <Options apps={$available} {process} />
    {:else if $viewMode === "apps"}
      <Options apps={$apps} {process} />
    {/if}
  </div>
</div>
<div class="bottom">
  <div class="mode">
    <button onclick={() => ($viewMode = "all")} class:suggested={$viewMode === "all"}> All </button>
    <button onclick={() => ($viewMode = "apps")} class:suggested={$viewMode === "apps"}> Apps </button>
    <button onclick={() => ($viewMode = "compatible")} class:suggested={$viewMode === "compatible"}> Compatible </button>
  </div>
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!$selectedId} onclick={() => process.go()}> Open </button>
</div>
