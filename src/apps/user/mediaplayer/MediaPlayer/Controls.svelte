<script lang="ts">
  import type { MediaPlayerRuntime } from "../runtime";
  import Forward from "./Controls/Forward.svelte";
  import Next from "./Controls/Next.svelte";
  import PlayPause from "./Controls/PlayPause.svelte";
  import Previous from "./Controls/Previous.svelte";
  import Rewind from "./Controls/Rewind.svelte";
  import Stop from "./Controls/Stop.svelte";
  import Time from "./Controls/Time.svelte";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { windowFullscreen, queue } = process;
</script>

<div class="media-controls">
  <Previous {process} />
  <Rewind {process} />
  <PlayPause {process} />
  <Forward {process} />
  <Next {process} />
  <Stop {process} />
  <Time {process} />
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <button
    class="lucide fullscreen-toggle"
    class:icon-minimize={$windowFullscreen}
    class:icon-maximize={!$windowFullscreen}
    onclick={() => process.handler?.renderer?.toggleFullscreen(process.pid)}
    disabled={!$queue.length}
  ></button>
</div>
