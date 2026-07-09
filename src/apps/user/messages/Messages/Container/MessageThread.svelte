<script lang="ts">
  import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import { GetConnector } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { ExpandedMessageNode } from "$types/server/messaging";
  import Header from "./MessageContent/Header.svelte";
  import MessageThread from "./MessageThread.svelte";

  const {
    message,
    process,
    originalMessageId,
    depth = 0,
  }: { message: ExpandedMessageNode; process: IMessagingAppRuntime; originalMessageId: string; depth?: number } = $props();

  let showMore = $state(false);

  if (message.author) {
    message.author.profilePicture = GetConnector<IUserConnector>("UserConnector").PictureUrl(message.authorId);
  }
</script>

<div
  class="message-thread"
  data-original={originalMessageId}
  data-id={message._id}
  class:is-original={message._id === originalMessageId}
>
  <button
    class="thread-item"
    onclick={() => process.readMessage(message._id, true)}
    use:contextMenu={[
      [
        {
          caption: "Read message",
          icon: "eye",
          action: () => process.readMessage(message._id),
        },
        { sep: true },
        {
          caption: "Reply",
          icon: "reply",
          action: () => process.replyTo(message),
        },
        {
          caption: "Forward",
          icon: "forward",
          action: () => process.forward(message),
        },
        { sep: true },
        {
          caption: "Archive message",
          icon: "archive",
          action: () => process.toggleArchived(message),
          isActive: () => process.isArchived(message._id),
        },
        {
          caption: "Delete message",
          icon: "trash-2",
          action: () => process.deleteMessage(message._id),
        },
      ],
      process,
    ]}
  >
    <Header {process} {message} small>
      {#snippet afterHeader()}
        {#if message._id === originalMessageId}
          (this message)
        {/if}
      {/snippet}
    </Header>
    <p>{message.body}</p>
  </button>
  {#if message.replies}
    {#if depth >= process.THREAD_DEPTH_MAX - 1 && !showMore}
      <button onclick={() => (showMore = true)} class="show-more">Show more messages</button>
    {:else}
      <div class="sub-thread">
        {#each message.replies as subMessage (subMessage._id)}
          <MessageThread
            message={subMessage}
            {process}
            {originalMessageId}
            depth={depth >= process.THREAD_DEPTH_MAX - 1 ? 0 : depth + 1}
          />
        {/each}
      </div>
    {/if}
  {/if}
</div>
