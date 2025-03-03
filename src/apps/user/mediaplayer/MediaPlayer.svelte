<script lang="ts">
  import { MediaPlayerIcon } from "$ts/images/apps";
  import { onMount } from "svelte";
  import Bar from "./MediaPlayer/Bar.svelte";
  import Controls from "./MediaPlayer/Controls.svelte";
  import type { MediaPlayerRuntime } from "./runtime";
  import File from "./MediaPlayer/File.svelte";

  const { process }: { process: MediaPlayerRuntime } = $props();

  let audio: HTMLVideoElement;

  const { isVideo, State, path } = process;

  onMount(() => {
    process.setPlayer(audio);
  });
</script>

<video bind:this={audio} class:show={$isVideo}>
  <track kind="captions" /></video
>
{#if $State && $path}
  {#if !$isVideo}
    <div class="audio-visual">
      <span class="lucide icon-music-2"></span>
      <File {process} />
    </div>
  {/if}
  <Bar {process} />
  <Controls {process} />
{:else}
  <div class="no-file">
    <img src={MediaPlayerIcon} alt="" />
    <h2>No File Opened!</h2>
    <p>Select a file to play from the File Menu or by pressing Alt+O.</p>
  </div>
{/if}
