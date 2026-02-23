<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import Spinner from "$lib/Spinner.svelte";
  import SearchResult from "./SearchResults/SearchResult.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { searching, searchResults } = process;
</script>

{#if $searching}
  <Spinner height={32} />
{:else if !$searchResults.length}
  <p class="no-results">Couldn't find anything</p>
{:else}
  {#each $searchResults as result, i (`${result.refIndex}-${result.score}-${result.matches}-${i}`)}
    <SearchResult {result} {i} {process} />
  {/each}
{/if}
