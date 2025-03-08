<script lang="ts">
  import type { MediaPlayerRuntime } from "../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();

  const { State, Loaded } = process;
</script>

<div class="bar" class:bounce={!$Loaded || !$State.duration}>
  <div class="inner" style="--w: {(100 / $State.duration) * $State.current}%;"></div>
</div>
