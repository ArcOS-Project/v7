<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import type { AppStorage } from "$types/app";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import AppGroups from "./AppList/AppGroups.svelte";
  import NewAppGroups from "./AppList/NewAppGroups.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { searchResults, searchQuery, searching, SelectionIndex, userPreferences } = process;

  let apps = $state<AppStorage>([]);

  onMount(() => {
    const unsubscribe = process.appStore()?.buffer.subscribe((v) => {
      apps = v;
    });

    return () => unsubscribe && unsubscribe();
  });
</script>

<div class="app-list" class:searching={$searchQuery} class:loading={$searching} data-contextmenu="startmenu-list">
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
  {:else if !$userPreferences.shell.start.noGroups}
    <NewAppGroups {process} />
  {:else}
    Not implemented
    <AppGroups {process} {apps} />
  {/if}

  {#if !Daemon}
    <span class="error-text">ERR_NO_DAEMON</span>
  {/if}
</div>
