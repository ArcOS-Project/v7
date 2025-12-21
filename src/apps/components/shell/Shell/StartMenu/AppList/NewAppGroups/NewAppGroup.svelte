<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { contextMenu } from "$ts/context/actions.svelte";
  import { Env } from "$ts/env";
  import { Daemon } from "$ts/server/user/daemon";
  import { AppGroups, UserPaths } from "$ts/server/user/store";
  import { join } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import type { ArcShortcut } from "$types/shortcut";
  import NewListItem from "../NewListItem.svelte";

  const { shortcuts, name, process }: { process: ShellRuntime; shortcuts: Record<string, ArcShortcut>; name: string } = $props();
  const { userPreferences, startMenuOpened } = process;
  const populatable = Store<ArcShortcut[]>([]);

  userPreferences.subscribe((v) => {
    $populatable = Object.values(shortcuts).filter(
      ({ target, type }) =>
        type === "app" && (Daemon?.apps?.isPopulatableByAppIdSync(target) || $userPreferences.shell.visuals.showHiddenApps)
    );
  });

  let expand = $state<boolean>(false);
</script>

{#if $populatable.length}
  {@const groupName = AppGroups[name.replace("$$", "")] || name}
  <div class="app-group">
    <button
      class="list-item expander"
      class:expanded={expand}
      onclick={() => (expand = !expand)}
      title={groupName}
      use:contextMenu={[
        [
          {
            caption: "Expand group",
            icon: "chevron-down",
            action: () => (expand = !expand),
            isActive: () => expand,
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
    {#if expand}
      <div class="items">
        {#each $populatable as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
          {#if !Daemon?.apps?.checkDisabled(shortcut.target)}
            <NewListItem {shortcut} {process} />
          {/if}
        {/each}
      </div>
    {/if}
  </div>
{/if}
