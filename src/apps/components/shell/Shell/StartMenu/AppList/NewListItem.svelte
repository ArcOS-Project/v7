<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Daemon } from "$ts/daemon";
  import { Env } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { UserPaths } from "$ts/user/store";
  import type { ArcShortcut } from "$types/shortcut";

  const { shortcut, process }: { shortcut: ArcShortcut; process: IShellRuntime } = $props();
  const { userPreferences, startMenuOpened } = process;

  const app = Daemon?.appStorage()?.getAppSynchronous(shortcut.target);

  let disabled = $state(false);

  async function launch() {
    disabled = true;
    await process.spawnApp(shortcut.target, process.pid);
    disabled = false;
    process.startMenuOpened.set(false);
  }
</script>

{#if app && process}
  <button
    class="list-item"
    onclick={launch}
    {disabled}
    use:contextMenu={[
      [
        {
          caption: "Launch",
          icon: "rocket",
          action: () => {
            if (!app) return;

            process.spawnApp(app?.id, process.pid);
          },
        },
        { sep: true },
        {
          caption: "Create shortcut",
          icon: "arrow-up-right",
          action: async () => {
            const [path] = await Daemon!.files!.LoadSaveDialog({
              title: "Choose where to save the app shortcut",
              icon: "ShortcutMimeIcon",
              startDir: UserPaths.Desktop,
              isSave: true,
              saveName: app.id,
              extensions: [".arclnk"],
            });

            if (!path) return;

            await Daemon?.shortcuts?.createShortcut(
              {
                icon: `@app::${app.id}`,
                name: app.metadata.name,
                type: "app",
                target: app.id,
              },
              path
            );
          },
        },
        {
          caption: "Pin app",
          action: async () => {
            if (!app) return;

            if ($userPreferences.pinnedApps?.includes(app?.id)) process.unpinApp(app?.id);
            else await process.pinApp(app?.id);
          },
          disabled: async () => {
            const x = process.appStore()?.getAppSynchronous(app?.id);

            return !x;
          },
          isActive: () => $userPreferences.pinnedApps?.includes(app?.id),
          icon: "pin",
        },
        {
          caption: "Open file location",
          icon: "folder-open",
          action: () => {
            process.spawnApp(
              "fileManager",
              +Env.get("shell_pid"),
              `U:/System/Start${app?.metadata?.appGroup ? `/$$${app?.metadata?.appGroup}` : ""}`
            );
          },
        },
        { sep: true },
        {
          caption: "Enable app groups",
          action: () => {
            $userPreferences.shell.start.noGroups = !$userPreferences.shell.start.noGroups;
            setTimeout(() => {
              $startMenuOpened = true;
            }, 0);
          },
          isActive: () => !$userPreferences.shell.start.noGroups,
          icon: "folder-tree",
        },
        {
          caption: "Refresh start menu",
          icon: "rotate-cw",
          action: () => {
            process.refreshStartMenu();
          },
        },
        { sep: true },
        {
          caption: "App info",
          icon: "info",
          action: () => {
            if (!app) return;

            process.spawnOverlayApp("AppInfo", process.pid, app.id);
          },
        },
        {
          caption: "Uninstall",
          icon: "trash-2",
          action: () => {
            if (!app) return;

            Daemon?.appreg?.uninstallAppWithAck(app);
          },
          disabled: () => !app?.entrypoint && !app?.thirdParty,
        },
      ],
      process,
    ]}
    class:no-safemode={process.safeMode && app.noSafeMode}
  >
    <img src={Daemon?.icons?.getAppIcon(app)} alt="" />
    <span class="name">{shortcut.name === `_${app.id}` ? app.metadata.name : shortcut.name}</span>
  </button>
{/if}
