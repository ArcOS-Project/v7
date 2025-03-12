<script lang="ts">
  import type { WordPadRuntime } from "./runtime";

  const { process }: { process: WordPadRuntime } = $props();
  const { editor } = process;
</script>

<div bind:this={$editor} contenteditable></div>
