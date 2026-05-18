<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
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

<ActionBar floating>
  {#snippet leftContent()}
    <ActionIconButton icon="folder-open" title="Load colorset..." onclick={() => process.openPreset()} />
    <ActionIconButton icon="save" title="Save current colorset" onclick={() => process.savePresetToFile()} />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested onclick={() => process.applyConfiguration()} disabled={!$changed}>Apply</ActionButton>
  {/snippet}
</ActionBar>
