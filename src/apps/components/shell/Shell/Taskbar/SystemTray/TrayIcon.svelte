<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextProps } from "$ts/context/actions.svelte";
  import { KernelStack } from "$ts/env";
  import type { TrayIconProcess } from "$ts/ui/tray/process";
  import { onMount } from "svelte";
  import Popup from "./TrayIcon/Popup.svelte";
  import Trigger from "./TrayIcon/Trigger.svelte";

  const { process, discriminator, icon }: { process: ShellRuntime; discriminator: string; icon: TrayIconProcess } = $props();
  const targetedProcess = KernelStack().getProcess(icon.pid);

  onMount(() => {
    const unsub = KernelStack().store.subscribe(() => {
      if (!KernelStack().getProcess(icon.pid)) {
        process.trayHost!.disposeTrayIcon(icon.pid, icon.identifier);
        unsub();
      }
    });
  });
</script>

{#if targetedProcess}
  <div data-contextmenu="taskbar-trayicon" use:contextProps={[targetedProcess]} class="icon">
    <Trigger {process} {discriminator} {icon} {targetedProcess} />
    <Popup {process} {discriminator} {icon} />
  </div>
{/if}
