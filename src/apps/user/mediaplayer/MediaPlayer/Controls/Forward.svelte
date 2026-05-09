<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";

  const { process }: { process: IMediaPlayerRuntime } = $props();
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
