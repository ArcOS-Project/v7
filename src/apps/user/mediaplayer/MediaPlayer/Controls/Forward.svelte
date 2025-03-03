<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  function forward() {
    process.Seek(+10);
  }
</script>

<button
  class="lucide icon-fast-forward forward"
  onclick={forward}
  aria-label="Forward"
>
</button>
