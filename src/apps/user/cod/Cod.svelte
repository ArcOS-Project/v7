<script lang="ts">
  import CodeEditor from "$lib/CodeEditor.svelte";
  import StatusBar from "$lib/Window/StatusBar.svelte";
  import StatusSegment from "$lib/Window/StatusBar/StatusSegment.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { CodRuntime } from "./runtime";

  const { process }: { process: CodRuntime } = $props();
  const { buffer, language, filename, original, mimetype, directoryName, mimeIcon, drive } = process;
</script>

<CodeEditor value={buffer} language={$language} readonly={$drive?.READONLY} />

<StatusBar>
  {#snippet leftContent()}
    <StatusSegment image={$mimeIcon}>{$filename || "Untitled"}</StatusSegment>
  {/snippet}
  {#snippet rightContent()}
    <StatusSegment>{formatBytes($buffer.length)}</StatusSegment>
    <StatusSegment>{$mimetype || "unknown"}</StatusSegment>
    <StatusSegment>{$language || "plain"}</StatusSegment>

    {#if $directoryName}
      <StatusSegment>{$directoryName}</StatusSegment>
    {/if}
    {#if $drive?.READONLY}
      <StatusSegment>Read-only</StatusSegment>
    {/if}
    {#if $buffer !== $original}
      <StatusSegment>Modified</StatusSegment>
    {/if}
  {/snippet}
</StatusBar>
