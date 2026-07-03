<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import UserLink from "$lib/UserLink.svelte";
  import { Daemon } from "$ts/env";
  import type { ExpandedMessage } from "$types/server/messaging";
  import dayjs from "dayjs";
  import { onMount, type Snippet } from "svelte";

  const {
    message,
    small = false,
    afterHeader,
  }: { message: ExpandedMessage; process: IMessagingAppRuntime; small?: boolean; afterHeader?: Snippet } = $props();
  const isSent = message?.authorId === Daemon.userInfo._id;

  let date = $state<string>();

  onMount(async () => {
    if (!message) return;

    date = dayjs(message?.createdAt).format("D MMMM YYYY, hh:mm A");
  });
</script>

<div class="header" class:small>
  <ProfilePicture
    fallback={message?.author!.profilePicture}
    height={small ? 32 : 40}
    showOnline
    online={message?.author!.dispatchClients > 0}
  />
  <div>
    <h1>{message?.title} {@render afterHeader?.()}</h1>
    <p>
      {#if isSent}
        To <UserLink user={message.recipientData!} userId={message?.recipient!} /> on {date}
      {:else}
        From <UserLink user={message.author!} userId={message.authorId!} /> on {date}
      {/if}
      {#if small}
        <span class="small-status">
          {#if message.attachments?.length}
            <span class="lucide icon-paperclip has-attachments"></span>
          {/if}
          {#if message.repliesTo}
            <span class="lucide icon-reply is-reply"></span>
          {/if}
        </span>
      {/if}
    </p>
  </div>
</div>
