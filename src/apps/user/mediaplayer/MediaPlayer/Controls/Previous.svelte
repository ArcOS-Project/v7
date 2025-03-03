<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex } = process;

  function previous() {
    process.previousSong();
  }
</script>

<button
  class="lucide previous icon-skip-back"
  onclick={previous}
  disabled={$queueIndex == 0}
  aria-label="Previous song"
>
</button>
