<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Daemon } from "$ts/daemon";
  import { sortByKey } from "$ts/util";
  import type { ArcShortcut } from "$types/shortcut";
  import { onMount } from "svelte";
  import ListItem from "./ListItem.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { StartMenuContents, userPreferences } = process;

  let singleDepthList = $state<ArcShortcut[]>([]);

  onMount(() => {
    StartMenuContents.subscribe((v) => {
      if (!v) return;

      let result = Object.values(v.shortcuts);

      for (const folder of v.dirs) {
        result.push(...Object.values(folder.children.shortcuts));
      }

      singleDepthList = sortByKey(
        result.filter(
          ({ target, type }) =>
            type === "app" && (Daemon?.apps?.isPopulatableByAppIdSync(target) || $userPreferences.shell.visuals.showHiddenApps)
        ),
        "name"
      );
    });
  });
</script>

<div class="app-listing">
  {#each singleDepthList as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
    {#if !Daemon?.apps?.checkDisabled(shortcut.target)}
      <ListItem {shortcut} {process} />
    {/if}
  {/each}
</div>
