<script lang="ts">
  import MarkdownRenderingComponent from "$lib/MarkdownRenderingComponent.svelte";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import type { PublicUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import type { MessagingAppRuntime } from "../../runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
  const userId = process.userDaemon!.userInfo!._id;
  const isSent = $message?.authorId === userId;

  let user = $state<PublicUserInfo>();
  let date = $state<string>();

  onMount(async () => {
    if (!$message) return;

    user = (isSent ? await process.userInfo($message.recipient) : $message.author!) || {
      username: "(deleted user)",
      profilePicture: ProfilePictures.def,
      admin: false,
      dispatchClients: 0,
    };
    date = dayjs($message.createdAt).format("D MMMM YYYY, hh:mm A");
  });
</script>

<div class="message-content">
  {#if $message && user}
    <div class="header">
      <ProfilePicture
        fallback={$message.author!.profilePicture}
        height={40}
        showOnline
        online={$message.author!.dispatchClients > 0}
      />
      <div>
        <h1>{$message.title}</h1>
        <p>
          {#if isSent}
            To {user.displayName || user.username} on {date}
          {:else}
            From {user.displayName || user.username} on {date}
          {/if}
        </p>
      </div>
    </div>
    <p class="message-body">
      <MarkdownRenderingComponent source={$message.body} />
    </p>
  {/if}
</div>
