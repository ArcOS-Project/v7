<script lang="ts">
  import type { CameraRuntime } from "./runtime";

  const { process }: { process: CameraRuntime } = $props();
  const { videoFeed, windowFullscreen, sourceSelect } = process;
</script>

<div class="viewfinder">
  <!-- svelte-ignore a11y_media_has_caption -->
  <video bind:this={$videoFeed} autoplay playsinline></video>
</div>
<div class="panel">
  <button onclick={() => process.Capture()} class="capture lucide icon-camera suggested" aria-label="Capture"></button>
  <button class="lucide icon-library" onclick={() => process.openFileLocation()} aria-label="Open file location"></button>
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    class="lucide fullscreen-toggle"
    class:icon-minimize={$windowFullscreen}
    class:icon-maximize={!$windowFullscreen}
    onclick={() => process.handler?.renderer?.toggleFullscreen(process.pid)}
    disabled={!$sourceSelect}
  ></button>
</div>
