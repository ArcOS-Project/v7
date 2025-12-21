<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import type { ArcShortcut } from "$types/shortcut";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import NewAppGroups from "./AppList/NewAppGroups.svelte";
  import NewListItem from "./AppList/NewListItem.svelte";
  import { sortByKey } from "$ts/util";

  const { process }: { process: ShellRuntime } = $props();
  const { searchResults, searchQuery, searching, SelectionIndex, userPreferences, StartMenuContents } = process;

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
  {:else if !$userPreferences.shell.start.noGroups}
    <NewAppGroups {process} />
  {:else}
    {#each singleDepthList as shortcut (`${shortcut.target}-${shortcut.name}-${shortcut.icon}-${shortcut.type}`)}
      {#if !Daemon?.apps?.checkDisabled(shortcut.target)}
        <NewListItem {shortcut} {process} />
      {/if}
    {/each}
  {/if}

  {#if !Daemon}
    <span class="error-text">ERR_NO_DAEMON</span>
  {/if}
</div>
