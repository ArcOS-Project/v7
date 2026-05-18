<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Daemon } from "$ts/daemon";
  import Options from "./OpenWith/Options.svelte";
  import type { OpenWithRuntime } from "./runtime";

  const { process }: { process: OpenWithRuntime } = $props();
  const { filename, viewMode, available, all, path, selectedId, apps } = process;
</script>

<div class="top">
  <div class="header">
    <h1>Select an app to open {$filename}</h1>
    <p class="location">
      <img src={Daemon?.assoc?.getFileAssociation($path)?.icon || process.getIconCached("DefaultMimeIcon")} alt="" /><span
        >{$path}</span
      >
    </p>
  </div>
  <div class="options">
    {#if $viewMode === "all"}
      <Options handlers={$all} {process} />
    {:else if $viewMode === "compatible"}
      <Options handlers={$available} {process} />
    {:else if $viewMode === "apps"}
      <Options handlers={$apps} {process} />
    {/if}
  </div>
</div>

<ActionBar>
  {#snippet leftContent()}
    <ActionButton suggested={$viewMode === "all"} onclick={() => ($viewMode = "all")}>All</ActionButton>
    <ActionButton suggested={$viewMode === "apps"} onclick={() => ($viewMode = "apps")}>Apps</ActionButton>
    <ActionButton suggested={$viewMode === "compatible"} onclick={() => ($viewMode = "compatible")}>Compatible</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$selectedId} onclick={() => process.go()}>Open</ActionButton>
  {/snippet}
</ActionBar>
