<script lang="ts">
  import type { MessagingAppRuntime } from "../runtime";
  import Message from "./Sidebar/List/Message.svelte";
  import Search from "./Sidebar/List/Search.svelte";
  import Pages from "./Sidebar/Pages.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { buffer } = process;
</script>

<div class="sidebar">
  <Pages {process} />
  <div class="messages">
    <Search {process} />
    <div class="list">
      {#each $buffer as message (message._id)}
        <Message {process} {message} />
      {/each}
    </div>
  </div>
</div>
