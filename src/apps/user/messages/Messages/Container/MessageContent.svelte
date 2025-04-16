<script lang="ts">
  import type { PublicUserInfo } from "$types/user";
  import { onMount } from "svelte";
  import type { MessagingAppRuntime } from "../../runtime";
  import dayjs from "dayjs";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
  const userId = process.userDaemon!.userInfo!._id;
  const isSent = $message?.authorId === userId;

  let user = $state<PublicUserInfo>();
  let date = $state<string>();

  onMount(async () => {
    if (!$message) return;

    user = await process.userInfo(isSent ? $message.recipient : $message.authorId);
    date = dayjs($message.createdAt).format("D MMMM YYYY, hh:mm A");
  });
</script>

<div class="message-content">
  {#if $message && user}
    <div class="header">
      <img src={user.profilePicture} alt="" />
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
      {$message.body}
    </p>
  {/if}
</div>
