<script lang="ts">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IProcess } from "$interfaces/IProcess";
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { ITrayIconProcess } from "$interfaces/services/ITrayHostService";
  import { Stack } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { onMount } from "svelte";
  import Popup from "./TrayIcon/Popup.svelte";
  import Trigger from "./TrayIcon/Trigger.svelte";

  const { process, discriminator, icon }: { process: IShellRuntime; discriminator: string; icon: ITrayIconProcess } = $props();
  const targetedProcess = Stack.getProcess(icon.pid);

  onMount(() => {
    const unsub = Stack.store.subscribe(() => {
      if (!Stack.getProcess(icon.pid)) unsub();
    });
  });
</script>

{#if targetedProcess}
  <div data-contextmenu="taskbar-trayicon" class="icon">
    <Trigger {process} {discriminator} {icon} {targetedProcess} />
    <Popup {process} {discriminator} {icon} />
  </div>
{/if}
