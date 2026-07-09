<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";

  const { process }: { process: IShellRuntime } = $props();
  const { actionCenterOpened } = process;

  function toggle() {
    $actionCenterOpened = !$actionCenterOpened;
  }
</script>

<button
  class="action-center-button"
  class:active={$actionCenterOpened}
  onclick={toggle}
  aria-label="Action Center"
  title="Action center..."
>
  <span class="lucide icon-bell"></span>
</button>
