<script lang="ts">
  import Custom from "./ArcTermColors/Custom.svelte";
  import Presets from "./ArcTermColors/Presets.svelte";
  import type { ArcTermColorsRuntime } from "./runtime";

  const { process }: { process: ArcTermColorsRuntime } = $props();
  const { mode, arcTermConfiguration, changed } = process;
</script>

<h1>ArcTerm Colors</h1>

<div class="mode-selector">
  <button class="mode" onclick={() => ($mode = "presets")} class:active={$mode === "presets"}>Presets</button>
  <button class="mode" onclick={() => ($mode = "custom")} class:active={$mode === "custom"}>Custom...</button>

  <div class="current-theme" style="background-color: {$arcTermConfiguration.background};" title="Current theme">
    <div style="--color: {$arcTermConfiguration.red};"></div>
    <div style="--color: {$arcTermConfiguration.yellow};"></div>
    <div style="--color: {$arcTermConfiguration.cyan};"></div>
    <div style="--color: {$arcTermConfiguration.foreground};"></div>
    <div style="--color: {$arcTermConfiguration.green};"></div>
    <div style="--color: {$arcTermConfiguration.blue};"></div>
    <div style="--color: {$arcTermConfiguration.magenta};"></div>
    <div style="--color: {$arcTermConfiguration.brightBlack};"></div>
  </div>
</div>

<div class="content {$mode}">
  {#if $mode === "custom"}
    <Custom {process} />
  {:else if $mode === "presets"}
    <Presets {process} />
  {/if}
</div>

<div class="actions">
  <button class="lucide icon-folder-open" aria-label="Load colorset..." onclick={() => process.openPreset()}></button>
  <button
    class="lucide icon-save"
    disabled={$mode === "presets"}
    aria-label="Save current colorset"
    onclick={() => process.savePresetToFile()}
  ></button>
  <div class="master">
    <button class="cancel" onclick={() => process.closeWindow()}>Cancel</button>
    <button class="apply suggested" onclick={() => process.applyConfiguration()} disabled={!$changed}>Apply</button>
  </div>
</div>
