<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { Loaded, State } = process;

  function forward() {
    process.Seek(+10);
  }
</script>

<button
  class="lucide icon-fast-forward forward"
  title="Skip forward"
  onclick={forward}
  disabled={!$Loaded || !$State.duration}
  aria-label="Forward"
>
</button>
