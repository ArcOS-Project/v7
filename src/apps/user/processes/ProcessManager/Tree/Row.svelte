<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { KernelStack } from "$ts/env";
  import type { Process } from "$ts/process/instance";
  import type { ProcessContext } from "$types/process";
  import { onMount } from "svelte";
  import type { ProcessManagerRuntime } from "../../runtime";
  import Row from "./Row.svelte";
  import { contextMenu } from "$ts/context/actions.svelte";
  import { BaseService } from "$ts/services/base";

  const {
    pid,
    proc,
    process,
    orphan = false,
  }: { pid: number; proc: Process; process: ProcessManagerRuntime; orphan?: boolean } = $props();

  const { selected } = process;
  const { focusedPid } = KernelStack().renderer!;

  let name = $state<string>();
  let icon = $state<string>();
  let appId = $state<string>();
  let children = $state<Map<number, Process>>(new Map());
  let closing = $state<boolean>(false);
  let context = $state<ProcessContext>();

  onMount(() => {
    KernelStack().store.subscribe(async () => {
      children = await KernelStack().getSubProcesses(proc.pid);
    });

    context = KernelStack().getProcessContext(pid);

    if (proc instanceof AppProcess) {
      const { app } = proc;

      name = app.data.metadata.name;
      icon = process.userDaemon?.appreg?.getAppIconByProcess(proc);
      appId = app.id;

      const dispatcher = process.systemDispatch.subscribe("window-closing", ([pid]) => {
        if (pid === proc.pid) {
          closing = true;
          process.systemDispatch.unsubscribeId("window-closing", dispatcher);
        }
      });

      return;
    }

    name = proc.name;
    icon = process.getIconCached("DefaultIcon");
  });
</script>

{#if !proc._disposed}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="row"
    class:closing
    onclick={() => ($selected = `proc#${pid}`)}
    use:contextMenu={[
      [
        {
          caption: "Process info",
          action: () => process.processInfoFor(proc),
          icon: "info",
        },
        {
          caption: "App info",
          disabled: () => !(proc instanceof AppProcess),
          action: () => process.appInfoFor(proc as AppProcess),
          icon: "app-window-mac",
        },
        {
          caption: "Service info",
          disabled: () => !(proc instanceof BaseService),
          action: () => process.serviceInfoFor(proc.name.replace("svc#", "")),
          icon: "cog",
        },
        { sep: true },
        {
          caption: "Focus",
          disabled: () => !(proc instanceof AppProcess),
          action: () => process.handler.renderer?.focusPid(proc.pid),
          icon: "flag",
        },
        { sep: true },
        {
          caption: "Kill process",
          disabled: () => proc._criticalProcess,
          action: () => process.kill(proc),
          icon: "x",
        },
      ],
      process,
    ]}
    class:selected={$selected === `proc#${pid}`}
    class:orphan
    class:critical={proc._criticalProcess}
  >
    <div class="segment name">
      <img src={icon} alt="" />
      <span>{name}{orphan ? " (orphaned)" : ""}</span>
    </div>
    <div class="segment pid" class:flagged={$focusedPid === proc.pid}>
      <img src={process.getIconCached("FlagIcon")} alt="" class="flag" />
      <span>{proc.pid}</span>
    </div>
    <div class="segment app-id">{appId || "-"}</div>
  </div>
  {#if children.size}
    <div class="indent" data-pid={proc.pid}>
      {#each [...children] as [pid, proc], i (`${i}-${pid} ${proc.name}`)}
        <Row {pid} {proc} {process} />
      {/each}
    </div>
  {/if}
{/if}
