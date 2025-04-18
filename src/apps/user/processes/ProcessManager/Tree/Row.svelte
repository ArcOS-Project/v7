<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { maybeIconId } from "$ts/images";
  import { DefaultIcon } from "$ts/images/apps";
  import { ComponentIcon, FlagIcon } from "$ts/images/general";
  import type { Process } from "$ts/process/instance";
  import { onMount } from "svelte";
  import type { ProcessManagerRuntime } from "../../runtime";
  import Row from "./Row.svelte";

  const { pid, proc, process }: { pid: number; proc: Process; process: ProcessManagerRuntime } = $props();

  const { selected } = process;
  const { handler } = process;
  const { focusedPid } = handler.renderer!;

  let name = $state<string>();
  let icon = $state<string>();
  let appId = $state<string>();
  let children = $state<Map<number, Process>>(new Map());
  let closing = $state<boolean>(false);

  onMount(() => {
    handler.store.subscribe(async () => {
      children = await handler.getSubProcesses(proc.pid);
    });

    if (proc instanceof AppProcess) {
      const { app } = proc;

      name = app.data.metadata.name;
      icon = process.userDaemon?.getAppIconByProcess(proc);
      appId = app.id;

      const dispatcher = process.globalDispatch.subscribe("window-closing", ([pid]) => {
        if (pid === proc.pid) {
          closing = true;
          process.globalDispatch.unsubscribeId("window-closing", dispatcher);
        }
      });

      return;
    }

    name = proc.name;
    icon = DefaultIcon;
  });
</script>

{#if !proc._disposed}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="row" class:closing onclick={() => ($selected = pid)} class:selected={$selected === pid}>
    <div class="segment name">
      <img src={icon} alt="" />
      <span>{name}</span>
    </div>
    <div class="segment pid" class:flagged={$focusedPid === proc.pid}>
      <img src={FlagIcon} alt="" class="flag" />
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
