<script lang="ts">
  import { Logo } from "$ts/branding";
  import type { ShellRuntime } from "../../runtime";

  const { process }: { process: ShellRuntime } = $props();
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
>
  <span class="lucide icon-bell"></span>
</button>
