<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import UserLink from "$lib/UserLink.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import { CommandResult } from "$ts/result";
  import { Daemon } from "$ts/server/user/daemon";
  import type { ExpandedMessage } from "$types/messaging";
  import type { PublicUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  const { message, process }: { message: ExpandedMessage; process: MessagingAppRuntime } = $props();
  const isSent = message?.authorId === Daemon.userInfo._id;

  let user = $state<PublicUserInfo>();
  let date = $state<string>();

  onMount(async () => {
    if (!message) return;

    const userInfoResult = isSent
      ? await process.userInfo(message?.recipient)
      : CommandResult.Ok<PublicUserInfo>(message?.author!);

    if (!userInfoResult?.success) {
      user = {
        username: "(deleted user)",
        profilePicture: ProfilePictures.def,
        admin: false,
        dispatchClients: 0,
      };
    } else {
      user = userInfoResult.result;
    }

    date = dayjs(message?.createdAt).format("D MMMM YYYY, hh:mm A");
  });
</script>

<div class="header">
  <ProfilePicture
    fallback={message?.author!.profilePicture}
    height={40}
    showOnline
    online={message?.author!.dispatchClients > 0}
  />
  <div>
    <h1>{message?.title}</h1>
    <p>
      {#if isSent}
        To <UserLink user={user!} /> on {date}
      {:else}
        From <UserLink user={user!} /> on {date}
      {/if}
    </p>
  </div>
</div>
