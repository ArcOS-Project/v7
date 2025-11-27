<script lang="ts">
  import Presets from "./ArcTermColors/Presets.svelte";
  import type { ArcTermColorsRuntime } from "./runtime";

  const { process }: { process: ArcTermColorsRuntime } = $props();
  const { mode } = process;
</script>

<h1>ArcTerm Colors</h1>

<div class="mode-selector">
  <button class="mode" onclick={() => ($mode = "presets")} class:active={() => $mode === "presets"}>Presets</button>
  <button class="mode" onclick={() => ($mode = "custom")} class:active={() => $mode === "custom"}>Custom...</button>

  <div class="current-theme">
    <div class="color-red"></div>
    <div class="color-green"></div>
    <div class="color-yellow"></div>
    <div class="color-blue"></div>
    <div class="color-cyan"></div>
    <div class="color-magenta"></div>
    <div class="color-fg"></div>
    <div class="color-bright-black"></div>
  </div>
</div>

<div class="content {$mode}">
  {#if $mode === "custom"}
    custom
  {:else if $mode === "presets"}
    <Presets {process} />
  {/if}
</div>

<div class="actions">
  <button class="lucide icon-folder-open" aria-label="Load colorset..." onclick={() => process.readPresetFromFile()}></button>
  <button
    class="lucide icon-save"
    disabled={$mode === "presets"}
    aria-label="Save current colorset"
    onclick={() => process.savePresetToFile()}
  ></button>
  <div class="master">
    <button class="cancel" onclick={() => process.closeWindow()}>Cancel</button>
    <button class="apply suggested" onclick={() => process.applyConfiguration()}>Apply</button>
  </div>
</div>
