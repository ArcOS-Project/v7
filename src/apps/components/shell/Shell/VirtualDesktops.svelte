<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { MessageBox } from "$ts/dialog";
  import { WarningIcon } from "$ts/images/dialog";
  import { DesktopIcon } from "$ts/images/general";
  import { Sleep } from "$ts/sleep";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { Wallpapers } from "$ts/wallpaper/store";
  import { Store } from "$ts/writable";
  import type { Workspace } from "$types/user";
  import type { ShellRuntime } from "../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { userDaemon, userPreferences, workspaceManagerOpened } = process;
  const { Wallpaper } = userDaemon!;

  let workspaces: Workspace[] = $state([]);
  let windowCounts = Store<Record<string, number>>({});

  function deleteWorkspace(uuid: string) {
    if ($windowCounts[uuid] > 0) {
      MessageBox(
        {
          title: "Can't delete workspace",
          message:
            "The workspace you want to delete still has windows opened in it. You have to close all windows in a workspace before you can delete it.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: WarningIcon,
        },
        process.pid,
        true
      );

      return;
    }

    MessageBox(
      {
        title: "Delete workspace",
        message: "Are you sure you want to permanently delete this workspace?",
        image: DesktopIcon,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => {
              userDaemon?.deleteVirtualDesktop(uuid);
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  $effect(() => {
    const sub = process.handler.store.subscribe((v) => {
      $windowCounts = {};

      for (const workspace of workspaces) {
        $windowCounts[workspace.uuid] = [...v].filter(
          ([_, p]) =>
            p instanceof AppProcess && p.app.desktop === workspace.uuid
        ).length;
      }
    });

    return () => sub();
  });

  userPreferences.subscribe(async (v) => {
    const incoming = JSON.stringify(v.workspaces.desktops);

    if (incoming === JSON.stringify(workspaces)) return;

    workspaces = [];
    await Sleep(0);
    workspaces = v.workspaces.desktops;
  });
</script>

<div
  class="virtual-desktops shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:docked={$userPreferences.shell.taskbar.docked}
  class:visible={$workspaceManagerOpened}
>
  {#if workspaces && workspaces.length}
    <div class="desktops">
      {#each workspaces as desktop, i}
        <button
          class="desktop"
          style="--wallpaper: url('{$Wallpaper
            ? $Wallpaper.url
            : Wallpapers.img0.url}');"
          onclick={() => userDaemon?.switchToDesktopByUuid(desktop.uuid)}
          class:selected={$userPreferences.workspaces.index === i}
          use:contextMenu={{
            process,
            options: async () => [
              {
                caption: "Go here",
                action: () => {
                  userDaemon?.switchToDesktopByUuid(desktop.uuid);
                },
                default: true,
              },
              {
                icon: "trash",
                caption: "Delete workspace",
                action: () => {
                  deleteWorkspace(desktop.uuid);
                },
              },
            ],
          }}
        >
          <div class="number">{i + 1}</div>
          <div class="bottom">
            {#if desktop.name}
              <div class="name">{desktop.name}</div>
            {/if}
            {#if $windowCounts[desktop.uuid]}
              <div class="items">
                <span class="lucide icon-app-window-mac"></span>
                <span>
                  {$windowCounts[desktop.uuid]}
                </span>
              </div>
            {/if}
          </div>
        </button>
      {/each}
    </div>
    <button
      class="add"
      aria-label="Add Desktop"
      onclick={() => userDaemon?.createWorkspace()}
      disabled={workspaces.length >= 10}
    >
      <span class="lucide icon-plus"></span>
    </button>
  {/if}
</div>
