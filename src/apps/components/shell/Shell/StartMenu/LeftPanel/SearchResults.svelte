<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
<<<<<<< HEAD
  import type { IArcFindService } from "$interfaces/services/IArcFindService";
=======
>>>>>>> development
  import Spinner from "$lib/Spinner.svelte";
  import SearchResult from "./SearchResults/SearchResult.svelte";

  const { process, service }: { process: IShellRuntime; service: IArcFindService } = $props();
  const { searching, searchResults } = service;
</script>

{#if $searching}
  <Spinner height={32} />
{:else if !$searchResults?.length}
  <p class="no-results">Couldn't find anything</p>
{:else}
  {#each $searchResults ?? [] as result, i (`${result.refIndex}-${result.score}-${result.matches}-${i}`)}
    <SearchResult {result} {i} {process} />
  {/each}
{/if}
