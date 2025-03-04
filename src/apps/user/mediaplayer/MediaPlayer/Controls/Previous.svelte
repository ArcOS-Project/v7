<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, Loaded, State } = process;

  function previous() {
    process.previousSong();
  }
</script>

<button
  class="lucide previous icon-skip-back"
  onclick={previous}
  disabled={$queueIndex == 0 || !$Loaded || !$State.duration}
  aria-label="Previous song"
>
</button>
