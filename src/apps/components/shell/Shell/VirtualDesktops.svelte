<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { AppProcess } from "$ts/apps/process";
  import { Daemon } from "$ts/daemon";
  import { Stack } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { Wallpapers } from "$ts/user/wallpaper/store";
  import { Store } from "$ts/writable";
  import type { Workspace } from "$types/user";
  import { onMount } from "svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences, workspaceManagerOpened } = process;
  const userDaemon = Daemon;
  const { Wallpaper } = userDaemon?.wallpaper! || {}!;

  let workspaces: Workspace[] = $state([]);
  let windowCounts = Store<Record<string, number>>({});

  onMount(() => {
    const sub = Stack.store.subscribe((v) => {
      $windowCounts = {};

      for (const workspace of workspaces) {
        $windowCounts[workspace.uuid] = [...v].filter(
          ([_, p]) => p instanceof AppProcess && p.app.desktop === workspace.uuid
        ).length;
      }
    });

    return () => sub();
  });

  userPreferences.subscribe(async (v) => {
    const incoming = JSON.stringify(v.workspaces.desktops);

    if (incoming === JSON.stringify(workspaces)) return;

    workspaces = v.workspaces.desktops;
  });
</script>

<div
  class="virtual-desktops shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:docked={$userPreferences.shell.taskbar.docked}
  class:visible={$workspaceManagerOpened}
>
  <div class="desktops">
    {#if workspaces && workspaces.length}
      {#each workspaces as desktop, i (desktop.uuid)}
        <button
          class="desktop"
          style="--wallpaper: url('{$Wallpaper ? $Wallpaper.url : Wallpapers.img0.url}');"
          onclick={() => ($userPreferences.workspaces.index = i)}
          class:selected={$userPreferences.workspaces.index === i}
          use:contextMenu={[
            [
              {
                caption: "Go here",
                action: () => {
                  Daemon?.workspaces?.switchToDesktopByUuid(desktop.uuid);
                },
                icon: "arrow-right",
              },
              {
                caption: "Delete workspace",
                action: () => {
                  process.deleteWorkspace(desktop);
                },
              },
            ],
            process,
          ]}
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
    {/if}

    {#if !userDaemon}
      <button class="desktop" style="--wallpaper: unset !important;">
        <span class="error-text">ERR_NO_DAEMON</span>
      </button>
    {/if}
  </div>

  <button
    class="add"
    aria-label="Add Desktop"
    onclick={() => userDaemon?.workspaces?.createWorkspace()}
    disabled={workspaces.length >= 10}
  >
    <span class="lucide icon-plus"></span>
  </button>
</div>
