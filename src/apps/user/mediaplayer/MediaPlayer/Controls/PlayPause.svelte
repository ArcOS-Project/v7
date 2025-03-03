<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { State } = process;

  function toggle() {
    if ($State.paused) process.Play();
    else process.Pause();
  }
</script>

<div class="group playpause">
  <button
    class="lucide play suggested"
    class:icon-play={$State.paused}
    class:icon-pause={!$State.paused}
    onclick={toggle}
    aria-label="Play/pause"
  >
  </button>
</div>
