<script lang="ts">
  import type { MessagingAppRuntime } from "../../runtime";
  import Message from "./List/Message.svelte";
  import Search from "./List/Search.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { buffer } = process;
</script>

<div class="message-list">
  <Search {process} />
  <div class="messages">
    {#each $buffer as message (message._id)}
      <Message {process} {message} />
    {/each}
  </div>
</div>
