<script lang="ts">
  import type { IArcFindService } from "$interfaces/services/IArcFindService";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";

  let {
    service,
    safeMode = false,
    searchBar = $bindable(),
  }: {
    service: IArcFindService;
    safeMode?: boolean;
    searchBar?: HTMLInputElement;
  } = $props();

  const { loading, searchQuery } = service;
</script>

{#if $loading}
  <div class="loading">
    <HtmlSpinner height={16} thickness={2} />
    <span>Refreshing</span>
  </div>
{:else if !safeMode}
  <span class="lucide icon-search"></span>
  <input
    type="text"
    role="searchbox"
    placeholder="Search..."
    bind:value={$searchQuery}
    bind:this={searchBar}
    onkeydown={(e) => service.MutateIndex(e)}
    disabled={safeMode}
  />
{/if}
