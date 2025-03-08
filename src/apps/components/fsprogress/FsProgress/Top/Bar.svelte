<script lang="ts">
  import type { FsProgressRuntime } from "../../runtime";

  const { process }: { process: FsProgressRuntime } = $props();
  const { Progress } = process;
</script>

<div class="bar">
  <div class="inner" style="--max: {$Progress.max}; --done: {$Progress.done}"></div>
</div>
