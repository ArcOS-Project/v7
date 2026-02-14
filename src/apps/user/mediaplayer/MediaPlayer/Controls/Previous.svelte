<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";
  import { LoopMode } from "../../types";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, Loaded, State } = process;

  function previous() {
    process.previousSong();
  }
</script>

<button
  class="lucide previous icon-skip-back"
  onclick={previous}
  disabled={($State.current <= 2 ? $queueIndex == 0 && $State.loopMode != LoopMode.All : false) || !$Loaded || !$State.duration}
  aria-label="Previous song"
  title="Previous song"
>
</button>
