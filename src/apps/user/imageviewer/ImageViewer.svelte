<script lang="ts">
  import type { IImageViewerRuntime } from "$interfaces/runtimes/IImageViewerRuntime";

  const { process }: { process: IImageViewerRuntime } = $props();
  const { imageUrl, openedFile } = process;
</script>

{#if $imageUrl && $openedFile}
  <img src={$imageUrl} alt={$openedFile} />
{/if}
