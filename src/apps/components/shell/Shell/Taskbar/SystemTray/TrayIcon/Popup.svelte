<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { TrayIconProcess } from "$ts/ui/tray/process";

  const { process, discriminator, icon }: { process: ShellRuntime; discriminator: string; icon: TrayIconProcess } = $props();
  const { openedTrayPopup, userPreferences } = process;
</script>

<div
  class="popup shell-colored {icon.popup?.className || ''}"
  style="--w: {icon.popup?.width}px; --h: {icon.popup?.height}px;"
  class:visible={discriminator === $openedTrayPopup}
  class:colored={$userPreferences.shell.taskbar.colored}
  data-pid={icon.pid}
  id={icon.identifier}
  data-selector="{icon.targetPid}#{icon.identifier}"
></div>
