<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import { UUID } from "$ts/uuid";
  import NewAppGroup from "./NewAppGroups/NewAppGroup.svelte";
  import NewListItem from "./NewListItem.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences, StartMenuContents } = process;
</script>

{#if $StartMenuContents?.dirs && $StartMenuContents?.files}
  {#each $StartMenuContents.dirs as dir (dir.itemId || UUID)}
    <NewAppGroup {process} shortcuts={dir.children.shortcuts} name={dir.name} />
  {/each}
  {#each Object.values($StartMenuContents.shortcuts) as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
    {#if (Daemon()?.apps?.isPopulatableByAppIdSync(shortcut.target) || $userPreferences.shell.visuals.showHiddenApps) && !Daemon()?.apps?.checkDisabled(shortcut.target) && shortcut.type === "app"}
      <NewListItem {process} {shortcut} />
    {/if}
  {/each}
{:else}
  <div class="spinner-center">
    <Spinner height={32} />
  </div>
{/if}
