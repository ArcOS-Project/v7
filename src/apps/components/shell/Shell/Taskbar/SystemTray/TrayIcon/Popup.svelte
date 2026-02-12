<script lang="ts">
  import type { IShellRuntime, ITrayIconProcess } from "$interfaces/shell";

  const { process, discriminator, icon }: { process: IShellRuntime; discriminator: string; icon: ITrayIconProcess } = $props();
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
