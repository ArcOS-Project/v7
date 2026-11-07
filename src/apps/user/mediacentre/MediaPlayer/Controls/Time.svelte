<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { State, Loaded } = process;

  let current = $state<string>("--:--");
  let duration = $state<string>("--:--");

  State.subscribe((v) => {
    current = $Loaded ? process.formatTime(v.current || 0) : "--:--";
    duration = $Loaded ? process.formatTime(v.duration || 0) : "--:--";
  });
</script>

<div class="timestamp">
  {current} / {duration}
</div>
