<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { Daemon } from "$ts/server/user/daemon";
  import { AppGroups } from "$ts/server/user/store";
  import { Store } from "$ts/writable";
  import type { ArcShortcut } from "$types/shortcut";
  import NewListItem from "../NewListItem.svelte";

  const { shortcuts, name, process }: { process: ShellRuntime; shortcuts: Record<string, ArcShortcut>; name: string } = $props();
  const { userPreferences } = process;
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
    <button class="list-item expander" class:expanded={expand} onclick={() => (expand = !expand)} title={groupName}>
      <img src={process.getIconCached("FolderIcon")} alt="" />
      <span class="name">{groupName}</span>
      <span class="lucide icon-chevron-right"></span>
    </button>
    {#if expand}
      <div class="items">
        {#each $populatable as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
          {#if (Daemon?.apps?.isPopulatableByAppIdSync(shortcut.target) || $userPreferences.shell.visuals.showHiddenApps) && !Daemon?.apps?.checkDisabled(shortcut.target)}
            <NewListItem {shortcut} {process} />
          {/if}
        {/each}
      </div>
    {/if}
  </div>
{/if}
