<script lang="ts">
  import type { ShellRuntime } from "../../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { workspaceManagerOpened } = process;

  function toggle() {
    $workspaceManagerOpened = !$workspaceManagerOpened;
  }
</script>

<button
  class="workspace-manager-button"
  class:active={$workspaceManagerOpened}
  onclick={toggle}
  aria-label="Workspace Manager"
>
  <span class="lucide icon-gallery-horizontal"></span>
</button>
