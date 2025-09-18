<script lang="ts">
  import type { Component } from "svelte";
  import type { ProcessManagerRuntime } from "./runtime";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { currentTab, selected } = process;

  let Tab: Component | undefined = $state(undefined);

  currentTab.subscribe((v) => {
    Tab = process.tabs[v];
    $selected = "";
  });
</script>

<div class="tabs">
  {#each Object.keys(process.tabs) as name (name)}
    <button class:selected={$currentTab === name} onclick={() => ($currentTab = name)}>{name}</button>
  {/each}
</div>
<div class="content {$currentTab.replaceAll(' ', '-').toLowerCase()}">
  {#if Tab}
    <Tab {process} />
  {/if}
</div>
