<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import { Daemon, Stack } from "$ts/env";
  import { ProcessesHelper } from "$ts/helpers/processes";
  import { isPopulatable } from "$ts/util/apps";
  import { draggable, type DragOptions } from "@neodrag/svelte";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";
  import { Store } from "$ts/writable";
  import type { IProcess } from "$interfaces/IProcess";
  import { flip } from "svelte/animate";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;
  const { store } = Stack;

  let positions = Store<Map<number, { x: number; y: number }>>(new Map());
  let tabs = Store<Map<number, IProcess>>(new Map());
  store()
    .entries()
    .forEach((v, i) => {
      tabs().set(v[0], v[1]);
    });

  store.subscribe((v) => {
    if (tabs().size === v.size) return;

    // process has been killed
    if (v.size < tabs().size) {
      tabs.set(
        new Map(
          [...tabs().entries()].filter(([pid]) => {
            return v.keys().toArray().includes(pid);
          })
        )
      );

      positions.set(
        new Map(
          [...positions().entries()].filter(([pid]) => {
            return v.keys().toArray().includes(pid);
          })
        )
      );
    } else {
      v.entries().forEach(([pid, process]) => {
        if (!tabs().keys().toArray().includes(pid)) {
          tabs().set(pid, process);
          tabs.set(new Map(tabs()));

          positions().set(pid, { x: 0, y: 0 });
          positions.set(new Map(positions()));
        }
      });
    }

    // console.log("proc list:", tabs());
    // console.log("pos list: ", positions());
  });

  function getPos(pid: number) {
    if (!positions().has(pid)) {
      positions().set(pid, { x: 0, y: 0 });
    }
    return positions().get(pid)!;
  }
</script>

<div class="opened-apps">
  {#each [...$tabs] as [pid, openedProcess] (pid)}
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
          // const currentPid = Number(iconButton.getAttribute("data-pid"));

          const movementActuationDistance = 0.75;
          const iconDragDist = data.offsetX / iconButton.offsetWidth;
          const iconDragDistRounded = iconDragDist >= 0 ? Math.floor(iconDragDist) : Math.ceil(iconDragDist);
          const iconGridDragDist =
            Math.abs(iconDragDist) - Math.abs(iconDragDistRounded) >= movementActuationDistance
              ? iconDragDist < 0
                ? iconDragDistRounded - 1
                : iconDragDistRounded + 1
              : iconDragDistRounded;

          // console.log("data.offsetX:            ", data.offsetX);
          // console.log("button width:            ", iconButton.offsetWidth);
          // console.log("total movement:          ", iconDragDist);
          // console.log("total movement (rounded):", iconDragDistRounded);
          // console.log("total icon space moves:  ", iconGridDragDist);

          const currentEntryIdx = $tabs
            .keys()
            .toArray()
            .findIndex((val) => {
              return val === pid;
            });

          const currentEntry = $tabs.entries().toArray().at(currentEntryIdx);

          // console.log("currentEntryIdx:", currentEntryIdx);
          // console.log("currentEntry:   ", currentEntry);

          if (!currentEntry) return;

          // begin repositioning

          const entries = [...$tabs];
          entries.splice(currentEntryIdx, 1);
          entries.splice(currentEntryIdx + iconGridDragDist, 0, currentEntry);
          tabs.set(new Map(entries));

          $positions.set(pid, { x: 0, y: 0 });

          // console.log(tabs());
        },
      }}
    >
      {#if ProcessesHelper.IsAnyGraphicalAppProcess(openedProcess) && !openedProcess._disposed && (isPopulatable(openedProcess.app.data) || openedProcess.overridePopulatable) && (!$userPreferences.shell.taskbar.openedAppsPerWorkspace || Daemon?.workspaces?.getDesktopIndexByUuid(openedProcess.app.desktop || "") === $userPreferences.workspaces.index)}
        <OpenedApp {pid} openedProcess={openedProcess as any} {process} />
      {/if}
    </div>
  {/each}
</div>
