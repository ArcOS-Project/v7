<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/daemon";
  import { UUID } from "$ts/util/uuid";
  import AppGroup from "./AppGroups/AppGroup.svelte";
  import AppGroupButton from "./AppGroups/AppGroupButton.svelte";
  import ListItem from "./ListItem.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences, StartMenuContents, selectedAppGroup } = process;
</script>

<div class="app-groups">
  <div class="inner" class:shift={!!$selectedAppGroup}>
    <div class="panel listing">
      {#if $StartMenuContents?.dirs && $StartMenuContents?.files}
        {#each $StartMenuContents.dirs as dir (dir.itemId || UUID())}
          <AppGroupButton {process} shortcuts={dir.children.shortcuts} name={dir.name} />
        {/each}
        {#each Object.values($StartMenuContents.shortcuts) as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
          {#if (Daemon?.apps?.isPopulatableByAppIdSync(shortcut.target) || $userPreferences.shell.visuals.showHiddenApps) && !Daemon?.apps?.checkDisabled(shortcut.target) && shortcut.type === "app"}
            <ListItem {process} {shortcut} />
          {/if}
        {/each}
      {:else}
        <div class="spinner-center">
          <Spinner height={32} />
        </div>
      {/if}
    </div>
    <div class="panel group">
      <button class="back" onclick={() => ($selectedAppGroup = "")}>
        <span class="lucide icon-arrow-left"></span>
        <span>Go back</span>
      </button>
      <hr />
      <div class="group-list">
        <AppGroup {process} />
      </div>
    </div>
  </div>
</div>
