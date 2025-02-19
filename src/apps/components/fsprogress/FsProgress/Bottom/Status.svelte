<script lang="ts">
  import type { FsProgressRuntime } from "../../runtime";

  const { process }: { process: FsProgressRuntime } = $props();
  const { Progress } = process;
</script>

<div class="status">
  <span
    class="lucide icon-triangle-alert warning"
    class:active={$Progress.errors.length}
    title="{$Progress.errors} Error(s)"
  >
  </span>
  <span
    class="lucide icon-hard-drive working"
    class:active={$Progress.working}
    title="Writing data indicator"
  >
  </span>
  <span
    class="lucide icon-hourglass waiting"
    class:active={$Progress.waiting}
    title="Cooldown indicator"
  >
  </span>
</div>
