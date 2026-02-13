<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import type { ShellTrayIcon } from "$apps/components/shell/types";
  import type { IProcess } from "$interfaces/process";

  const {
    process,
    discriminator,
    icon,
    targetedProcess,
  }: { process: IShellRuntime; discriminator: string; icon: ShellTrayIcon; targetedProcess: IProcess } = $props();
  const { openedTrayPopup } = process;

  async function openThis() {
    if (icon.action) icon.action(targetedProcess);
    else if (icon.popup) $openedTrayPopup = discriminator;
  }
</script>

<button
  class="trigger"
  onclick={openThis}
  class:active={discriminator === $openedTrayPopup}
  disabled={discriminator === $openedTrayPopup}
>
  <img src={process.getIconCached(icon.icon) || icon.icon} alt={discriminator} />
</button>
