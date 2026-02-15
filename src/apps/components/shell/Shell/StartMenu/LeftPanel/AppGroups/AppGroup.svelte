<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Daemon } from "$ts/daemon";
  import { Store } from "$ts/writable";
  import type { ArcShortcut } from "$types/shortcut";
  import NewListItem from "../ListItem.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences, StartMenuContents, selectedAppGroup } = process;
  const populatable = Store<ArcShortcut[]>([]);

  userPreferences.subscribe(update);
  selectedAppGroup.subscribe(update);

  function update() {
    if (!$selectedAppGroup) return;

    const shortcuts = $StartMenuContents.dirs.find((d) => d.name === $selectedAppGroup)?.children?.shortcuts || {};

    $populatable = Object.values(shortcuts).filter(({ target, type }) => {
      if (type !== "app") return false;

      return Daemon?.apps?.isPopulatableByAppIdSync(target) || $userPreferences.shell.visuals.showHiddenApps;
    });
  }
</script>

{#if $populatable.length}
  {#each $populatable as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
    {#if !Daemon?.apps?.checkDisabled(shortcut.target)}
      <NewListItem {shortcut} {process} />
    {/if}
  {/each}
{/if}
