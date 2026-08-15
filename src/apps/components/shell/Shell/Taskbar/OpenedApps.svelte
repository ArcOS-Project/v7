<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import { Daemon, Stack } from "$ts/env";
  import { ProcessesHelper } from "$ts/helpers/processes";
  import { isPopulatable } from "$ts/util/apps";
  import { draggable } from "@neodrag/svelte";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";
  import type { IProcess } from "$interfaces/IProcess";
  import { flip } from "svelte/animate";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;
  const { store } = Stack;

  function shouldShow(openedProcess: IProcess) {
    return (
      ProcessesHelper.IsAnyGraphicalAppProcess(openedProcess) &&
      !openedProcess._disposed &&
      (isPopulatable(openedProcess.app.data) || openedProcess.overridePopulatable) &&
      (!$userPreferences.shell.taskbar.openedAppsPerWorkspace ||
        Daemon?.workspaces?.getDesktopIndexByUuid(openedProcess.app.desktop || "") === $userPreferences.workspaces.index)
    );
  }

  let positions = $state<Map<number, { x: number; y: number }>>(new Map());
  let tabs = $state<Map<number, IProcess>>(new Map());

  // get any exisiting processes
  // just in case
  store()
    .entries()
    .forEach(([pid, process]) => {
      if (shouldShow(process)) {
        tabs.set(pid, process);
      }
    });

  store.subscribe((v) => {
    if (tabs.size === v.size) return;

    // add new processes

    v.entries().forEach(([pid, process]) => {
      if (!tabs.keys().toArray().includes(pid) && shouldShow(process)) {
        tabs.set(pid, process);
        positions.set(pid, { x: 0, y: 0 });
      }
    });

    // remove dead processes

    tabs = new Map(
      [...tabs.entries()].filter(([pid]) => {
        return v.keys().toArray().includes(pid);
      })
    );

    positions = new Map(
      [...positions.entries()].filter(([pid]) => {
        return v.keys().toArray().includes(pid);
      })
    );
  });

  function getPos(pid: number) {
    if (!positions.has(pid)) {
      positions.set(pid, { x: 0, y: 0 });
    }
    return positions.get(pid)!;
  }
</script>

<div class="opened-apps">
  {#each [...tabs] as [pid, openedProcess] (pid)}
    <div
      class="drag-container"
      animate:flip={{ duration: 500 }}
      use:draggable={{
        bounds: "parent",
        axis: "x",
        threshold: {
          delay: 125,
        },
        position: getPos(pid),
        onDragEnd(data) {
          const iconButton = data.currentNode.firstElementChild as HTMLElement | null;
          if (!iconButton) return;

          const movementActuationDistance = 0.75;
          const iconDragDist = data.offsetX / iconButton.offsetWidth;
          const iconDragDistRounded = iconDragDist >= 0 ? Math.floor(iconDragDist) : Math.ceil(iconDragDist);
          const iconGridDragDist =
            Math.abs(iconDragDist) - Math.abs(iconDragDistRounded) >= movementActuationDistance
              ? iconDragDist < 0
                ? iconDragDistRounded - 1
                : iconDragDistRounded + 1
              : iconDragDistRounded;

          const currentEntryIdx = tabs
            .keys()
            .toArray()
            .findIndex((val) => {
              return val === pid;
            });

          const currentEntry = tabs.entries().toArray().at(currentEntryIdx);
          if (!currentEntry) return;

          // begin repositioning

          const entries = [...tabs];
          entries.splice(currentEntryIdx, 1);
          entries.splice(currentEntryIdx + iconGridDragDist, 0, currentEntry);
          tabs = new Map(entries);

          // force reset position so it's not visually offset
          positions.set(pid, { x: 0, y: 0 });
        },
      }}
    >
      <OpenedApp {pid} openedProcess={openedProcess as any} {process} />
    </div>
  {/each}
</div>
