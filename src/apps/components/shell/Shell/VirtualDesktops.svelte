<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { DesktopIcon } from "$ts/images/general";
  import { Sleep } from "$ts/sleep";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { Workspace } from "$types/user";
  import type { ShellRuntime } from "../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { userDaemon, userPreferences, workspaceManagerOpened } = process;

  let workspaces: Workspace[] = $state([]);

  function deleteWorkspace(uuid: string) {
    MessageBox(
      {
        title: "Are you sure?",
        message:
          "Deleting a workspace will close all windows in that workspace, which could cause you to lose unsaved information. Are you sure?",
        image: DesktopIcon,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => {
              userDaemon?.deleteVirtualDesktop(uuid);
            },
          },
        ],
      },
      process.pid,
      true
    );
  }

  userPreferences.subscribe(async (v) => {
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
