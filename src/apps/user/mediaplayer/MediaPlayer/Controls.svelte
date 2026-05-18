<script lang="ts">
  import { Stack } from "$ts/env";
  import type { MediaPlayerRuntime } from "../runtime";
  import Forward from "./Controls/Forward.svelte";
  import Loop from "./Controls/Loop.svelte";
  import Next from "./Controls/Next.svelte";
  import PlayPause from "./Controls/PlayPause.svelte";
  import Previous from "./Controls/Previous.svelte";
  import Rewind from "./Controls/Rewind.svelte";
  import Stop from "./Controls/Stop.svelte";
  import Time from "./Controls/Time.svelte";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { windowFullscreen, queue, pinControls } = process;
</script>

<div class="media-controls">
  <Previous {process} />
  <Rewind {process} />
  <PlayPause {process} />
  <Forward {process} />
  <Next {process} />
  <Loop {process} />
  <Stop {process} />
  <Time {process} />
  {#if $windowFullscreen}
    <button
      class="lucide pin-toggle"
      class:icon-pin={$pinControls}
      class:icon-pin-off={!$pinControls}
      class:suggested={$pinControls}
      aria-label="Pin controls"
      title="Pin controls"
      onclick={() => ($pinControls = !$pinControls)}
    ></button>
  {/if}
  <button
    class="lucide fullscreen-toggle"
    class:icon-minimize={$windowFullscreen}
    class:icon-maximize={!$windowFullscreen}
    title="Toggle fullscreen"
    aria-label="Toggle fullscreen"
    onclick={() => Stack.renderer?.toggleFullscreen(process.pid)}
    disabled={!$queue.length}
  ></button>
</div>
