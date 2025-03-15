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
  <img src={icon.icon} alt={discriminator} />
</button>
