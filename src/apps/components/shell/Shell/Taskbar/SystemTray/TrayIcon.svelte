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
  <div
    use:contextMenu={[
      [
        {
          icon: "arrow-up-from-line",
          caption: "Focus App",
          action: () => {
            const appProc = Stack.getProcess(targetedProcess.parentPid) as IAppProcess;
            if (!appProc || !appProc.app) return;

            Stack.renderer?.focusPid(appProc.pid);
          },
        },
        { sep: true },
        {
          icon: "book-copy",
          caption: "App info",
          action: async () => {
            const appProc = Stack.getProcess(targetedProcess.parentPid) as IAppProcess;
            if (!appProc || !appProc.app) return;

            await process.spawnOverlayApp("AppInfo", process.pid, appProc.app.id);
          },
        },
        {
          icon: "book",
          caption: "Process info",
          action: async () => {
            const parentProc = Stack.getProcess(targetedProcess.parentPid) as IProcess;
            if (!parentProc) return;

            await process.spawnOverlayApp("ProcessInfoApp", process.pid, parentProc);
          },
        },
        { sep: true },
        {
          icon: "circle-x",
          caption: "Close app",
          action: async () => {
            const appProc = Stack.getProcess(targetedProcess.parentPid) as IAppProcess;

            if (!appProc) return;
            if (appProc.app) {
              await appProc.closeWindow();
              return;
            }

            await appProc.killSelf();
          },
        },
      ],
      process,
    ]}
    class="icon"
  >
    <Trigger {process} {discriminator} {icon} {targetedProcess} />
    <Popup {process} {discriminator} {icon} />
  </div>
{/if}
