<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, queue } = process;

  function next() {
    process.nextSong();
  }
</script>

<button
  class="lucide next icon-skip-forward"
  onclick={next}
  disabled={$queueIndex >= $queue.length - 1}
  aria-label="Next song"
>
</button>
