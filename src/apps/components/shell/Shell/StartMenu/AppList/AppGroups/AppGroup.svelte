<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { isPopulatable } from "$ts/apps/util";
  import type { AppStorage } from "$types/app";
  import ListItem from "../ListItem.svelte";

  const { apps, id, groupName, process }: { process: ShellRuntime; apps: AppStorage; id: string; groupName: string } = $props();
  const { userPreferences } = process;

  let expand = $state<boolean>(false);
</script>

{#if apps.filter((a) => a.metadata.appGroup === id && (isPopulatable(a) || $userPreferences.shell.visuals.showHiddenApps)).length}
  <div class="app-group">
    <button class="list-item expander" class:expanded={expand} onclick={() => (expand = !expand)}>
      <img src={process.getIconCached("FolderIcon")} alt="" />
      <span class="name">{groupName}</span>
      <span class="lucide icon-chevron-right"></span>
    </button>
    {#if expand}
      <div class="items">
        {#each apps as app (`${app.id}-${app.metadata.name}`)}
          {#if app.metadata.appGroup === id}
            {#if (isPopulatable(app) || $userPreferences.shell.visuals.showHiddenApps) && !process.userDaemon?.apps?.checkDisabled(app.id)}
              <ListItem {app} {process} />
            {/if}
          {/if}
        {/each}
      </div>
    {/if}
  </div>
{/if}
