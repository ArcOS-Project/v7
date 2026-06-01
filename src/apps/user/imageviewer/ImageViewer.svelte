<script lang="ts">
  import type { IImageViewerRuntime } from "$interfaces/runtimes/IImageViewerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ActionPill from "$lib/Window/ActionBar/ActionPill.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import { Stack } from "$ts/env";
  import { getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";
  import { ImageViewer } from "svelte-image-viewer";
  const { process }: { process: IImageViewerRuntime } = $props();
  const { imageUrl, openedFile, viewer, scale } = process;

  let minScale = $state<number>(0.25);
  let maxScale = $state<number>(3.0);

  onMount(() => {
    $viewer?.scaleImageToFit();

    $viewer?.getContainer()?.addEventListener("click", () => Stack.renderer?.focusPid(process.pid));
  });

  function zoomOut() {
    $scale -= 0.1;
    if ($scale <= minScale) $scale = minScale;
  }

  function zoomIn() {
    $scale += 0.1;
    if ($scale >= maxScale) $scale = maxScale;
  }
</script>

{#if $imageUrl && $openedFile}
  <div class="viewer-container">
    <ImageViewer src={$imageUrl} alt={$openedFile} bind:this={$viewer} bind:targetScale={$scale} bind:minScale bind:maxScale />
  </div>
  <ActionBar>
    {#snippet leftContent()}
      <ActionPill key="Filename">
        {getItemNameFromPath($openedFile)}
      </ActionPill>
      <ActionPill key="Zoom">
        {($scale*100).toFixed(2)}%
      </ActionPill>
    {/snippet}
    {#snippet rightContent()}
      <ActionIconButton
        icon="zoom-out"
        onclick={zoomOut}
        disabled={$scale <= minScale}
        title="Zoom out"
        className="zoom-button"
      />
      <input type="range" name="" id="" bind:value={$scale} min={minScale} max={maxScale} step={0.1} />
      <ActionIconButton icon="zoom-in" onclick={zoomIn} disabled={$scale >= maxScale} title="Zoom out" className="zoom-button" />
      <ActionSeparator />
      <ActionIconButton icon="fullscreen" onclick={() => $viewer?.scaleImageToFit()} title="Zoom to fit"></ActionIconButton>
      <ActionIconButton icon="percent" onclick={() => ($scale = 1)} title="Zoom to 100%" disabled={$scale === 1} />
    {/snippet}
  </ActionBar>
{/if}
