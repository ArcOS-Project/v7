<script lang="ts">
  import { onMount } from "svelte";
  import Bar from "./MediaPlayer/Bar.svelte";
  import Controls from "./MediaPlayer/Controls.svelte";
  import File from "./MediaPlayer/File.svelte";
  import QueueItem from "./MediaPlayer/QueueItem.svelte";
  import type { MediaPlayerRuntime } from "./runtime";
  import CoverImage from "./MediaPlayer/CoverImage.svelte";
  import { Daemon } from "$ts/server/user/daemon";

  const { process }: { process: MediaPlayerRuntime } = $props();

  let audio: HTMLVideoElement;
  let hideControls = $state<boolean>(false);
  let hideTimeout: NodeJS.Timeout | undefined;

  function onmousemove() {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideControls = false;

    hideTimeout = setTimeout(() => {
      hideControls = true;
    }, 3000);
  }

  const {
    isVideo,
    State,
    queue,
    queueIndex,
    Loaded,
    windowFullscreen,
    LoadingMetadata,
    CurrentCoverUrl,
    mediaSpecificAccentColor,
  } = process;

  onMount(() => {
    process.setPlayer(audio);
  });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="container"
  class:hide-controls={hideControls}
  {onmousemove}
  data-contextmenu={$queue.length && $Loaded ? "player" : ""}
  class:is-video={$isVideo && $Loaded}
  class:theme-dark={$windowFullscreen}
  style={$mediaSpecificAccentColor ? Daemon.renderer?.getAppRendererStyle($mediaSpecificAccentColor.replace("#","")) : ""}
>
  <div class="video-wrapper" class:show={$isVideo}>
    <video bind:this={audio}>
      <track kind="captions" />
    </video>
  </div>
  {#if $State && $queue[$queueIndex]}
    {#if !$isVideo}
      <div
        class="audio-visual"
        style={!$LoadingMetadata && $CurrentCoverUrl ? `--cover-backdrop: url('${$CurrentCoverUrl}')` : ""}
      >
        <CoverImage {process} />
        <File {process} />
      </div>
    {/if}
    <Bar {process} />
    <Controls {process} />
  {:else}
    <div class="no-file">
      <img src={process.getIconCached("MediaPlayerIcon")} alt="" />
      <h2>No File Opened!</h2>
      <p>Select a file to play from the File Menu or by pressing Alt+O.</p>
    </div>
  {/if}
</div>
<div class="queue" class:hide={hideControls}>
  {#each $queue as path, i (path + `${i}`)}
    <QueueItem {path} {i} {process} />
  {/each}
</div>
