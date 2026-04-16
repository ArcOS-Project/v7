<script lang="ts">
  import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
  import { GetConnector } from "$ts/env";
  import type { ExpandedMessageNode } from "$types/messaging";
  import type { MessagingAppRuntime } from "../../runtime";
  import Header from "./MessageContent/Header.svelte";
  import MessageThread from "./MessageThread.svelte";

  const {
    message,
    process,
    originalMessageId,
  }: { message: ExpandedMessageNode; process: MessagingAppRuntime; originalMessageId: string } = $props();

  if (message.author) {
    message.author.profilePicture = GetConnector<IUserConnector>("UserConnector").PictureUrl(message.authorId);
  }
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
