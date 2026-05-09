<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";

  const { process }: { process: IMessagingAppRuntime } = $props();
  const { searchQuery } = process;
</script>

<div class="search">
  <span class="lucide icon-search"></span>
  <input type="text" placeholder="Search for a message..." bind:value={$searchQuery} />
  {#if $searchQuery}
    <button class="icon-x" onclick={() => ($searchQuery = "")} aria-label="Clear search"></button>
  {/if}
</div>
