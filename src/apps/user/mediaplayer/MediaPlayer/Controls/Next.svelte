<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, queue, Loaded, State } = process;

  function next() {
    process.nextSong();
  }
</script>

<button
  class="lucide next icon-skip-forward"
  onclick={next}
  disabled={$queueIndex >= $queue.length - 1 || !$Loaded || !$State.duration}
  aria-label="Next song"
>
</button>
