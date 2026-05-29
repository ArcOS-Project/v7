<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { RelativeTimeMod } from "$ts/dayjs";
  import { Daemon } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { ExpandedMessage } from "$types/server/messaging";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount, type Snippet } from "svelte";

  const { process, message, children }: { process: IMessagingAppRuntime; message: ExpandedMessage; children?: Snippet } =
    $props();
  const { message: openedMessage } = process;
  let date = $state<string>();

  onMount(async () => {
    if (!message) return;

    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);
    date = dayjs(message.createdAt).fromNow();
  });
</script>

{#if message?.author}
  <button
    class="message"
    onclick={() => process.readMessage(message._id)}
    class:selected={$openedMessage?._id === message._id}
    class:unread={!message.read && message.authorId !== Daemon?.userInfo?._id}
    ondblclick={() => process.popoutMessage(message._id)}
    use:contextMenu={[
      [
        {
          caption: "Read message",
          icon: "eye",
          action: () => process.readMessage(message._id),
        },
        {
          caption: "Pop-out",
          icon: "square-arrow-out-up-right",
          action: () => process.popoutMessage(message._id),
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
    <ProfilePicture fallback={message.author.profilePicture} showOnline online={message.author.dispatchClients > 0} height={40} />
    <div>
      <div class="author">
        <h1>{message.author.displayName || message.author.username}</h1>
        <span class="timestamp" title={dayjs(message.createdAt).format("D MMMM YYYY, HH:mm:ss")}>{date}</span>
        {#if children}
          {@render children()}
        {/if}
      </div>
      <div class="subject">
        <span class="title">
          {message.title}
        </span>
        <div class="statuses">
          {#if message.authorId === Daemon.userInfo?._id}
            <span class="lucide icon-send" title="You sent this message"></span>
          {/if}
          {#if message.repliesTo}
            <span class="lucide icon-reply" title="This message is a reply"></span>
          {/if}
          {#if message.attachments?.length}
            <span class="lucide icon-paperclip" title="This message has one or more attachments"></span>
          {/if}
        </div>
      </div>
    </div>
  </button>
{/if}
