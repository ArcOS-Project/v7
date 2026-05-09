<script lang="ts">
  import type { IFsProgressRuntime } from "$interfaces/runtimes/IFsProgressRuntime";

  const { process }: { process: IFsProgressRuntime } = $props();
  const { Progress } = process;
</script>

<div class="bar">
  <div class="inner" style="--max: {$Progress.max}; --done: {$Progress.done}"></div>
</div>
