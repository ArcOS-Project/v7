<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";
  import { LoopMode } from "../../types";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { queueIndex, queue, Loaded, State, loopMode } = process;

  function next() {
    process.nextSong();
  }
</script>

<button
  class="lucide next icon-skip-forward"
  onclick={next}
  disabled={($queueIndex >= $queue.length - 1 && $loopMode != LoopMode.All) || !$Loaded || !$State.duration}
  aria-label="Next song"
  title="Next song"
>
</button>
