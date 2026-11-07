<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { Loaded, State } = process;

  function stop() {
    process.Stop();
  }
</script>

<button class="lucide icon-square stop" title="Stop" onclick={stop} disabled={!$Loaded || !$State.duration} aria-label="Stop"
></button>
