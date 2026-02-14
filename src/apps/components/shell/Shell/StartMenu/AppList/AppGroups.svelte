<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Daemon } from "$ts/daemon";
  import { AppGroups } from "$ts/user/store";
  import { isPopulatable } from "$ts/util/apps";
  import type { AppStorage } from "$types/app";
  import AppGroup from "./AppGroups/AppGroup.svelte";
  import ListItem from "./ListItem.svelte";

  const { process, apps }: { process: IShellRuntime; apps: AppStorage } = $props();
  const { userPreferences } = process;
</script>

{#each Object.entries(AppGroups) as [id, groupName]}
  <AppGroup {apps} {id} {groupName} {process} />
{/each}
{#each apps as app (`${app.id}-${app.metadata.name}`)}
  {#if !app.metadata.appGroup || !AppGroups[app.metadata.appGroup]}
    {#if (isPopulatable(app) || $userPreferences.shell.visuals.showHiddenApps) && !Daemon?.apps?.checkDisabled(app.id)}
      <ListItem {app} {process} />
    {/if}
  {/if}
{/each}
