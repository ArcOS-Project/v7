<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { IArcFindService } from "$interfaces/services/IArcFindService";
  import { Daemon } from "$ts/env";
  import type { StringStore } from "$types/shared/writable";
  import { onMount } from "svelte";
  import AppGroups from "./LeftPanel/AppGroups.svelte";
  import AppListing from "./LeftPanel/AppListing.svelte";
  import SearchResults from "./LeftPanel/SearchResults.svelte";

  let {
    process,
    service,
    searchQuery = $bindable(),
  }: { process: IShellRuntime; service?: IArcFindService | undefined; searchQuery: StringStore | undefined } = $props();
  const { userPreferences } = process;
  const { searching } = service ?? {};

  onMount(() => {
    if (service) searchQuery = service.searchQuery;
  });
</script>

<div class="left-pane" class:searching={$searchQuery} class:loading={$searching}>
  {#if service && $searchQuery}
    <SearchResults {process} {service} />
  {:else if !$userPreferences.shell.start.noGroups}
    <AppGroups {process} />
  {:else}
    <AppListing {process} />
  {/if}

  {#if !Daemon}
    <span class="error-text">ERR_NO_DAEMON</span>
  {/if}
</div>
