<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { Loaded, State } = process;

  function stop() {
    process.Stop();
  }
</script>

<button class="lucide icon-square stop" title="Stop" onclick={stop} disabled={!$Loaded || !$State.duration} aria-label="Stop"
></button>
