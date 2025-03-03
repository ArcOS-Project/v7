<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  function rewind() {
    process.Seek(-10);
  }
</script>

<button class="material-icons-round reverse" onclick={rewind}>
  fast_rewind
</button>
