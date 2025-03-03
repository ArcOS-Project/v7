<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  function stop() {
    process.Stop();
  }
</script>

<button class="material-icons-round stop" onclick={stop}> stop </button>
