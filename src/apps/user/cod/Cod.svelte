<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import { formatBytes } from "$ts/kernel/mods/fs/util";
  import type { CodRuntime } from "./runtime";

  const { process }: { process: CodRuntime } = $props();
  const { buffer, language, filename, original, mimetype, directoryName, mimeIcon, userPreferences, windowFullscreen } = process;
</script>

<CodeEditor value={buffer} language={$language} />
<div class="status-bar">
  <div class="file">
    <img src={$mimeIcon} alt="" />
    <span>{$filename || "Untitled"}</span>
  </div>
  <div class="size">{formatBytes($buffer.length)}</div>
  <div class="mimetype">{$mimetype || "unknown"}</div>
  <div class="language">{$language || "plain"}</div>
  {#if $directoryName}
    <div class="parent">in {$directoryName}</div>
  {/if}
  {#if $buffer !== $original}
    <div class="modified">Modified</div>
  {/if}
</div>
