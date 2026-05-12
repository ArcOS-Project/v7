<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { State, Loaded } = process;

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
    disabled={!$Loaded || !$State.duration}
  >
  </button>
</div>
