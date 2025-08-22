<script lang="ts">
  import type { ImageViewerRuntime } from "./runtime";

  const { process }: { process: ImageViewerRuntime } = $props();
  const { imageUrl, openedFile } = process;
</script>

{#if $imageUrl && $openedFile}
  <img src={$imageUrl} alt={$openedFile} />
{/if}
