<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";
  import { LoopMode } from "../../types";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, queue, Loaded, State } = process;

  function next() {
    process.nextSong();
  }
</script>

<button
  class="lucide next icon-skip-forward"
  onclick={next}
  disabled={($queueIndex >= $queue.length - 1 && $State.loopMode != LoopMode.All) || !$Loaded || !$State.duration}
  aria-label="Next song"
  title="Next song"
>
</button>
