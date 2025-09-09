<script lang="ts">
  import type { MediaPlayerRuntime } from "../../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { State, Loaded } = process;

  let current = $state<string>("--:--");
  let duration = $state<string>("--:--");

  State.subscribe((v) => {
    current = $Loaded ? process.formatTime(v.current || 0) : "--:--";
    duration = $Loaded ? prasocess.formatTime(v.duration || 0) : "--:--";
  });
</script>

<div class="timestamp">
  {current} / {duration}
</div>
