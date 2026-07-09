<script lang="ts">
  import type { IProcess } from "$interfaces/IProcess";
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import Icon from "$lib/Icon.svelte";
  import type { ShellTrayIcon } from "$types/services/tray";

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
  <Icon icon={icon.icon} />
</button>
