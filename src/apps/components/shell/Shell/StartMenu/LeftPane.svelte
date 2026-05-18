<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Daemon } from "$ts/daemon";
  import AppGroups from "./LeftPanel/AppGroups.svelte";
  import AppListing from "./LeftPanel/AppListing.svelte";
  import SearchResults from "./LeftPanel/SearchResults.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { searchQuery, searching, userPreferences } = process;
</script>

<div class="left-pane" class:searching={$searchQuery} class:loading={$searching}>
  {#if $searchQuery}
    <SearchResults {process} />
  {:else if !$userPreferences.shell.start.noGroups}
    <AppGroups {process} />
  {:else}
    <AppListing {process} />
  {/if}

  {#if !Daemon}
    <span class="error-text">ERR_NO_DAEMON</span>
  {/if}
</div>
