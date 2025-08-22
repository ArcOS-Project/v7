<script lang="ts">
  import type { Component } from "svelte";
  import type { AdvSysSetRuntime } from "./runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();
  const { tabs, currentTab, bufferChanged } = process;

  let Tab: Component | undefined = $state(undefined);

  currentTab.subscribe((v) => {
    Tab = tabs[v];
  });
</script>

<div class="tabs">
  {#each Object.keys(tabs) as name}
    <button class:selected={$currentTab === name} onclick={() => ($currentTab = name)}>{name}</button>
  {/each}
</div>
<div class="content {$currentTab.replaceAll(' ', '-').toLowerCase()}">
  {#if Tab}
    <Tab {process} />
  {/if}
</div>
<div class="actions">
  <button class="suggested" onclick={() => process.apply(true)}>Okay</button>
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button onclick={() => process.apply()} disabled={!$bufferChanged}>Apply</button>
</div>
