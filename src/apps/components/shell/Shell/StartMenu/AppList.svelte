<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { isPopulatable } from "$ts/apps/util";
  import { Daemon } from "$ts/server/user/daemon";
  import type { AppStorage } from "$types/app";
  import { onMount } from "svelte";
  import type { IShellRuntime } from "$interfaces/shell";
  import AppGroups from "./AppList/AppGroups.svelte";
  import ListItem from "./AppList/ListItem.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { searchResults, searchQuery, searching, SelectionIndex, userPreferences } = process;

  let apps = $state<AppStorage>([]);

  onMount(() => {
    const unsubscribe = process.appStore()?.buffer.subscribe((v) => {
      apps = v;
    });

    return () => unsubscribe && unsubscribe();
  });
</script>

<div class="app-list" class:searching={$searchQuery} class:loading={$searching}>
  {#if $searchQuery}
    {#if $searching}
      <Spinner height={32} />
    {:else}
      {#each $searchResults as result, i (`${result.refIndex}-${result.score}-${result.matches}-${i}`)}
        <button
          class="list-item"
          title={result.item.description}
          onclick={() => process.Trigger(result.item)}
          class:selected={i == $SelectionIndex}
        >
          <img src={result.item.image} alt="" />
          <span class="name">
            <p>{result.item.caption}</p>
            <p class="description">{result.item.description}</p>
          </span>
        </button>
      {/each}
      {#if !$searchResults.length}
        <p class="no-results">Couldn't find anything</p>
      {/if}
    {/if}
  {:else if $userPreferences.shell.start.noGroups}
    {#each apps as app (`${app.id}-${app.metadata.name}`)}
      {#if (isPopulatable(app) || $userPreferences.shell.visuals.showHiddenApps) && !Daemon?.apps?.checkDisabled(app.id)}
        <ListItem {app} {process} />
      {/if}
    {/each}
  {:else}
    <AppGroups {process} {apps} />
  {/if}

  {#if !Daemon}
    <span class="error-text">ERR_NO_DAEMON</span>
  {/if}
</div>
