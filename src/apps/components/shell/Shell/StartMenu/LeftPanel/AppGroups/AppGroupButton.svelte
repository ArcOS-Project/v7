<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Daemon } from "$ts/daemon";
  import { Env } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { AppGroups, UserPaths } from "$ts/user/store";
  import { join } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import type { ArcShortcut } from "$types/shortcut";

  const { process, shortcuts, name }: { process: IShellRuntime; shortcuts: Record<string, ArcShortcut>; name: string } = $props();
  const { userPreferences, startMenuOpened } = process;
  const populatable = Store<ArcShortcut[]>([]);

  userPreferences.subscribe((v) => {
    $populatable = Object.values(shortcuts).filter(
      ({ target, type }) =>
        type === "app" && (Daemon?.apps?.isPopulatableByAppIdSync(target) || $userPreferences.shell.visuals.showHiddenApps)
    );
  });
</script>

{#if $populatable.length}
  {@const groupName = AppGroups[name.replace("$$", "")] || name}
  <button
    class="list-item"
    onclick={() => process.selectedAppGroup.set(name)}
    title={groupName}
    use:contextMenu={[
      [
        {
          caption: "Open group",
          icon: "chevron-down",
          action: () => process.selectedAppGroup.set(name),
        },
        {
          caption: "Open in File Manager",
          icon: "folder-open",
          action: () => process.spawnApp("fileManager", +Env.get("shell_pid"), join(UserPaths.StartMenu, name)),
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
      ],
      process,
    ]}
  >
    <img src={process.getIconCached("FolderIcon")} alt="" />
    <span class="name">{groupName}</span>
    <span class="lucide icon-chevron-right"></span>
  </button>
{/if}
