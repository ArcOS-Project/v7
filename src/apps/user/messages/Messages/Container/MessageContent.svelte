<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import UserLink from "$lib/UserLink.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import { Daemon } from "$ts/server/user/daemon";
  import { type MessageNode } from "$types/messaging";
  import type { PublicUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import type { MessagingAppRuntime } from "../../runtime";
  import MessageThread from "./MessageThread.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
  const userId = Daemon!.userInfo!._id;
  const isSent = $message?.authorId === userId;

  let user = $state<PublicUserInfo>();
  let date = $state<string>();
  let thread = $state<MessageNode[]>();

  onMount(async () => {
    if (!$message) return;

    user = (isSent ? await process.userInfo($message?.recipient) : $message?.author!) || {
      username: "(deleted user)",
      profilePicture: ProfilePictures.def,
      admin: false,
      dispatchClients: 0,
    };
    thread = await process.service.getMessageThread($message?._id!);
    date = dayjs($message?.createdAt).format("D MMMM YYYY, hh:mm A");
  });
</script>

<div class="message-content">
  {#if $message && user}
    <div class="header">
      <ProfilePicture
        fallback={$message?.author!.profilePicture}
        height={40}
        showOnline
        online={$message?.author!.dispatchClients > 0}
      />
      <div>
        <h1>{$message?.title}</h1>
        <p>
          {#if isSent}
            To <UserLink {user} /> on {date}
          {:else}
            From <UserLink {user} /> on {date}
          {/if}
        </p>
      </div>
    </div>
    <p class="message-body markdown-body">
      <SvelteMarkdown source={$message.body} />
    </p>
    {#if $message.repliesTo}
      {#each thread as threadMessage (threadMessage._id)}
        <MessageThread message={threadMessage} {process} originalMessageId={$message._id} />
      {/each}
    {/if}
  {/if}
</div>
