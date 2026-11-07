<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";
  import { LoopMode } from "../../types";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { queueIndex, Loaded, State, loopMode } = process;

  function previous() {
    process.previousSong();
  }
</script>

<button
  class="lucide previous icon-skip-back"
  onclick={previous}
  disabled={($State.current <= 2 ? $queueIndex == 0 && $loopMode != LoopMode.All : false) || !$Loaded || !$State.duration}
  aria-label="Previous song"
  title="Previous song"
>
</button>
