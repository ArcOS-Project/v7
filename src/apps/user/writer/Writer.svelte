<script lang="ts">
  import type { IWriterRuntime } from "$interfaces/runtimes/IWriterRuntime";
  import StatusBar from "$lib/Window/StatusBar.svelte";
  import StatusSegment from "$lib/Window/StatusBar/StatusSegment.svelte";
  import { formatBytes } from "$ts/util/fs";

  const { process }: { process: IWriterRuntime } = $props();
  const { buffer, filename, original, input, mimetype, directoryName, mimeIcon, userPreferences, windowFullscreen, drive } =
    process;
</script>

<textarea
  bind:value={$buffer}
  bind:this={$input}
  class:monospace={$userPreferences.appPreferences.writer.fixedWidth}
  spellcheck={!$userPreferences.appPreferences.writer.noErrorChecking}
  class:wrap={$userPreferences.appPreferences.writer.wordWrap}
  class:no-statusbar={$userPreferences.appPreferences.writer.hideStatusBar}
  class:zen={$windowFullscreen}
  readonly={$drive?.READONLY}
></textarea>

{#if !$userPreferences.appPreferences.writer.hideStatusBar}
  <StatusBar>
    {#snippet leftContent()}
      <StatusSegment image={$mimeIcon}>{$filename || "Untitled"}</StatusSegment>
    {/snippet}
    {#snippet rightContent()}
      <StatusSegment title={$buffer.length}>{formatBytes($buffer.length)}</StatusSegment>
      <StatusSegment>{$mimetype || "unknown"}</StatusSegment>
      {#if $directoryName}
        <StatusSegment>in {$directoryName}</StatusSegment>
      {/if}
      {#if $drive?.READONLY}
        <StatusSegment>Read-only</StatusSegment>
      {/if}
      {#if $buffer !== $original}
        <StatusSegment>Modified</StatusSegment>
      {/if}
    {/snippet}
  </StatusBar>
{/if}
