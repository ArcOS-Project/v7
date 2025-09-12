<script lang="ts">
  import { formatBytes } from "$ts/util/fs";
  import type { WriterRuntime } from "./runtime";

  const { process }: { process: WriterRuntime } = $props();
  const { buffer, filename, original, input, mimetype, directoryName, mimeIcon, userPreferences, windowFullscreen } = process;
</script>

<textarea
  bind:value={$buffer}
  bind:this={$input}
  class:monospace={$userPreferences.appPreferences.writer.fixedWidth}
  spellcheck={!$userPreferences.appPreferences.writer.noErrorChecking}
  class:wrap={$userPreferences.appPreferences.writer.wordWrap}
  class:no-statusbar={$userPreferences.appPreferences.writer.hideStatusBar}
  class:zen={$windowFullscreen}
></textarea>
{#if !$userPreferences.appPreferences.writer.hideStatusBar}
  <div class="status-bar">
    <div class="file">
      <img src={$mimeIcon} alt="" />
      <span>{$filename || "Untitled"}</span>
    </div>
    <div class="size">
      {formatBytes($buffer.length)}
    </div>
    <div class="mimetype">{$mimetype || "unknown"}</div>
    {#if $directoryName}
      <div class="parent">in {$directoryName}</div>
    {/if}
    {#if $buffer !== $original}
      <div class="modified">Modified</div>
    {/if}
  </div>
{/if}
