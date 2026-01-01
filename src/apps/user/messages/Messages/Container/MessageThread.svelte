<script lang="ts">
  import { Server } from "$ts/env";
  import { authcode } from "$ts/util";
  import type { ExpandedMessageNode } from "$types/messaging";
  import type { MessagingAppRuntime } from "../../runtime";
  import Header from "./MessageContent/Header.svelte";
  import MessageThread from "./MessageThread.svelte";

  const {
    message,
    process,
    originalMessageId,
  }: { message: ExpandedMessageNode; process: MessagingAppRuntime; originalMessageId: string } = $props();

  if (message.author) message.author.profilePicture = `${Server.url}/user/pfp/${message.authorId}${authcode()}`;
</script>

<div class="message-thread">
  <button class="thread-item" onclick={() => process.readMessage(message._id, true)}>
    <Header {process} {message}></Header>
    <p>{message.body}</p>
  </button>
  {#if message.replies}
    <div class="sub-thread">
      {#each message.replies as subMessage (subMessage._id)}
        <MessageThread message={subMessage} {process} {originalMessageId} />
      {/each}
    </div>
  {/if}
</div>
