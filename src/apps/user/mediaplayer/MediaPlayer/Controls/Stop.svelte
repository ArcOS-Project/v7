<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  function stop() {
    process.Stop();
  }
</script>

<button class="lucide icon-square stop" onclick={stop} aria-label="Stop"
></button>
