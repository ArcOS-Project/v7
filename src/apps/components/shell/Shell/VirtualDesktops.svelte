<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { Wallpapers } from "$ts/wallpaper/store";
  import { Store } from "$ts/writable";
  import type { Workspace } from "$types/user";
  import type { ShellRuntime } from "../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { userDaemon, userPreferences, workspaceManagerOpened } = process;
  const { Wallpaper } = userDaemon!;

  let workspaces: Workspace[] = $state([]);
  let windowCounts = Store<Record<string, number>>({});

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
      {#each workspaces as desktop, i (desktop.uuid)}
        <button
          class="desktop"
          style="--wallpaper: url('{$Wallpaper
            ? $Wallpaper.url
            : Wallpapers.img0.url}');"
          onclick={() => userDaemon?.switchToDesktopByUuid(desktop.uuid)}
          class:selected={$userPreferences.workspaces.index === i}
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
  {/if}
  <button
    class="add"
    aria-label="Add Desktop"
    onclick={() => userDaemon?.createWorkspace()}
    disabled={workspaces.length >= 10}
  >
    <span class="lucide icon-plus"></span>
  </button>
</div>
