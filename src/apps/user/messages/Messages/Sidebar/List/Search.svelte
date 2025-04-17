<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { searchQuery } = process;
</script>

<div class="search">
  <span class="lucide icon-search"></span>
  <input type="text" placeholder="Search for a message..." bind:value={$searchQuery} />
  {#if $searchQuery}
    <button class="icon-x" onclick={() => ($searchQuery = "")} aria-label="Clear search"></button>
  {/if}
</div>
