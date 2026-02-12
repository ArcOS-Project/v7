<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextProps } from "$ts/context/actions.svelte";
  import { Stack } from "$ts/env";
  import { onMount } from "svelte";
  import Popup from "./TrayIcon/Popup.svelte";
  import Trigger from "./TrayIcon/Trigger.svelte";
  import type { ITrayIconProcess } from "$interfaces/shell";

  const { process, discriminator, icon }: { process: ShellRuntime; discriminator: string; icon: ITrayIconProcess } = $props();
  const targetedProcess = Stack.getProcess(icon.pid);

  onMount(() => {
    const unsub = Stack.store.subscribe(() => {
      if (!Stack.getProcess(icon.pid)) {
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
