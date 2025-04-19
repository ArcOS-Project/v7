<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";
  import type { PartialMessage } from "$types/messaging";
  import Message from "./Message.svelte";

  const { process, messages }: { process: MessagingAppRuntime; messages: PartialMessage[] } = $props();
  let expanded = $state<boolean>(false);
  const first = messages.shift();
</script>

{#if !messages.length && first}
  <Message {process} message={first} />
{:else}
  <div class="correlation" class:expanded>
    <div class="master">
      <Message {process} message={first!}>
        <button
          class="lucide icon-chevron-down"
          class:icon-chevron-up={expanded}
          onclick={() => (expanded = !expanded)}
          aria-label="Expand message"
        ></button>
      </Message>
    </div>
    <div class="items">
      {#each messages as message (message._id)}
        <Message {process} {message} />
      {/each}
    </div>
  </div>
{/if}
