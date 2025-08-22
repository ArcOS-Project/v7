<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { MessagingAppRuntime } from "../../runtime";
  import CorrelatedMessages from "./List/CorrelatedMessages.svelte";
  import Message from "./List/Message.svelte";
  import Search from "./List/Search.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { buffer, refreshing, searchQuery, searchResults, correlated } = process;
</script>

<div class="messages">
  <Search {process} />
  <div class="list">
    {#if $refreshing}
      <p class="info">
        <Spinner height={16} /><span>Loading...</span>
      </p>
    {:else if $buffer.length}
      {#if !$searchQuery}
        {#each $correlated as messages (messages[0].correlationId)}
          <CorrelatedMessages {process} {messages} />
        {/each}
      {:else if $searchResults.length}
        {#each $buffer as message (message._id)}
          {#if $searchResults.includes(message._id)}
            <Message {process} {message} />
          {/if}
        {/each}
      {:else}
        <p class="info">No search results!</p>
      {/if}
    {:else}
      <p class="info">No messages here!</p>
    {/if}
  </div>
</div>
