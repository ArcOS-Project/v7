<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { Loaded, State } = process;

  function rewind() {
    process.Seek(-10);
  }
</script>

<button
  class="lucide reverse icon-rewind"
  title="Rewind"
  onclick={rewind}
  aria-label="Rewind"
  disabled={!$Loaded || !$State.duration}
>
</button>
