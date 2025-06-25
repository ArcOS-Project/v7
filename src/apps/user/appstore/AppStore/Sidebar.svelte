<script lang="ts">
  import type { AppStoreRuntime } from "../runtime";
  import { appStorePages } from "../store";
  import Account from "./Sidebar/Account.svelte";

  const { process }: { process: AppStoreRuntime } = $props();
  const { searching, searchQuery, currentPage, loadingPage } = process;
</script>

<div class="sidebar">
  <div class="search">
    <span class="lucide icon-search"></span>
    <input type="text" placeholder="Search..." bind:value={$searchQuery} />
    {#if $searchQuery}
      {#if !$searching}
        <button class="lucide icon-corner-down-left enter-indicator" aria-label="Search"></button>
      {:else}
        <button class="lucide icon-x" onclick={() => ($searchQuery = "")} aria-label="Clear search"></button>
      {/if}
    {/if}
  </div>
  <div class="pages">
    {#each [...appStorePages] as [id, page]}
      {#if !page.hidden}
        {#if page.groupName}
          <p class="group-name">{page.groupName}</p>
        {/if}
        <button
          class="page {id}"
          class:selected={$currentPage === id}
          onclick={() => process.switchPage(id)}
          disabled={$loadingPage}
        >
          <span class="lucide icon-{page.icon}"></span>
          <span>{page.name}</span>
        </button>
      {/if}
    {/each}
  </div>
  <Account {process} />
</div>
