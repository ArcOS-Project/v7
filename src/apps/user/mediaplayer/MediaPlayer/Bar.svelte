<script lang="ts">
  import SafeModeNotice from "$lib/Daemon/SafeModeNotice.svelte";
  import { onMount } from "svelte";
  import type { MediaPlayerRuntime } from "../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  const { State, Loaded, queue } = process;

  let sliderProgress = $state((100 / $State.duration) * $State.current);
  let draggingSlider = $state(false);

  onMount(() => {
    setInterval(() => {
      if (!draggingSlider) sliderProgress = (100 / $State.duration) * $State.current;
    }, 100);
  });

  function inputEvent() {
    draggingSlider = true;
  }

  function changeEvent() {
    process.SeekTo(sliderProgress / (100 / $State.duration));
    draggingSlider = false;
  }
</script>

<div class="bar" class:bounce={$queue.length && (!$Loaded || !$State.duration)}>
  {#if $queue.length && (!$Loaded || !$State.duration)}
    <div class="inner" style="--w: {(100 / $State.duration) * $State.current}%;"></div>
  {:else}
    <input
      class="slider"
      type="range"
      style="--progress-percent: {sliderProgress}%; --slider-thumb-offset: {(14 * sliderProgress) / 100 - 7}px;"
      min="0"
      max="100"
      step="0.01"
      bind:value={sliderProgress}
      oninput={inputEvent}
      onchange={changeEvent}
    />
  {/if}
</div>
