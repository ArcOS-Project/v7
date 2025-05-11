<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { isPopulatable } from "$ts/apps/util";
  import { AppGroups } from "$ts/server/user/store";
  import type { AppStorage } from "$types/app";
  import AppGroup from "./AppGroups/AppGroup.svelte";
  import ListItem from "./ListItem.svelte";

  const { process, apps }: { process: ShellRuntime; apps: AppStorage } = $props();
  const { userPreferences } = process;
</script>

{#each Object.entries(AppGroups) as [id, groupName]}
  <AppGroup {apps} {id} {groupName} {process} />
{/each}
{#each apps as app (`${app.id}-${app.metadata.name}`)}
  {#if !app.metadata.appGroup || !AppGroups[app.metadata.appGroup]}
    {#if (isPopulatable(app) || $userPreferences.shell.visuals.showHiddenApps) && !process.userDaemon?.checkDisabled(app.id)}
      <ListItem {app} {process} />
    {/if}
  {/if}
{/each}
