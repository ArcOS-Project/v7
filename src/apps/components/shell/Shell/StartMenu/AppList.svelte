<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { isPopulatable } from "$ts/apps/util";
  import type { AppStorage } from "$types/app";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import ListItem from "./AppList/ListItem.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { searchResults, searchQuery, searching, SelectionIndex } = process;

  let apps = $state<AppStorage>([]);

  onMount(() => {
    const unsubscribe = process.userDaemon?.appStore?.buffer.subscribe((v) => {
      apps = v;
    });

    return () => unsubscribe && unsubscribe();
  });
</script>

<div class="app-list" class:searching={$searchQuery}>
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
  {:else}
    {#each apps as app}
      {#if isPopulatable(app) && !process.userDaemon?.checkDisabled(app.id)}
        <ListItem {app} {process} />
      {/if}
    {/each}
  {/if}

  {#if !process.userDaemon}
    <span class="error-text">ERR_NO_DAEMON</span>
  {/if}
</div>
