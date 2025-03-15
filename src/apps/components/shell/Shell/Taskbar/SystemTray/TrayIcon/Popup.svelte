<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { ShellTrayIcon } from "$apps/components/shell/types";
  import type { Process } from "$ts/process/instance";

  const {
    process,
    discriminator,
    icon,
    targetedProcess,
  }: { process: ShellRuntime; discriminator: string; icon: ShellTrayIcon; targetedProcess: Process } = $props();
  const Popup = icon.popup?.component;
  const { openedTrayPopup, userPreferences } = process;
</script>

{#if Popup}
  <div
    class="popup shell-colored {icon.popup?.className || ''}"
    style="--w: {icon.popup?.width}px; --h: {icon.popup?.height}px;"
    class:visible={discriminator === $openedTrayPopup}
    class:colored={$userPreferences.shell.taskbar.colored}
    data-pid={icon.pid}
    id={icon.identifier}
  >
    <Popup {icon} {discriminator} process={targetedProcess} shell={process} />
  </div>
{/if}
