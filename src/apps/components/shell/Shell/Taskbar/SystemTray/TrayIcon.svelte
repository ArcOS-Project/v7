<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { ShellTrayIcon } from "$apps/components/shell/types";
  import { onMount } from "svelte";
  import Popup from "./TrayIcon/Popup.svelte";
  import Trigger from "./TrayIcon/Trigger.svelte";

  const { process, discriminator, icon }: { process: ShellRuntime; discriminator: string; icon: ShellTrayIcon } = $props();
  const targetedProcess = process.handler.getProcess(icon.pid);

  onMount(() => {
    const unsub = process.handler.store.subscribe(() => {
      if (!process.handler.getProcess(icon.pid)) {
        process.disposeTrayIcon(icon.pid, icon.identifier);
        unsub();
      }
    });
  });
</script>

{#if targetedProcess}
  <div class="icon">
    <Trigger {process} {discriminator} {icon} {targetedProcess} />
    <Popup {process} {discriminator} {icon} {targetedProcess} />
  </div>
{/if}
