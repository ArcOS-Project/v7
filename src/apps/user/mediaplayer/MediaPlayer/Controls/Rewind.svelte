<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  function rewind() {
    process.Seek(-10);
  }
</script>

<button class="lucide reverse icon-rewind" onclick={rewind} aria-label="Rewind">
</button>
