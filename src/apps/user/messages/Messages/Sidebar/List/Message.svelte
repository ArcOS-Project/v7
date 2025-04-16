<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";
  import { RelativeTimeMod } from "$ts/dayjs";
  import type { PartialMessage } from "$types/messaging";
  import type { PublicUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount } from "svelte";

  const { process, message }: { process: MessagingAppRuntime; message: PartialMessage } = $props();
  const { message: openedMessage } = process;
  let user = $state<PublicUserInfo>();
  let date = $state<string>();

  onMount(async () => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);
    date = dayjs(message.createdAt).fromNow(true);

    console.log(message);

    user = await process.userInfo(message.authorId);
  });
</script>

{#if user}
  <button class="message" onclick={() => process.readMessage(message._id)} class:selected={$openedMessage?._id === message._id}>
    <img src={user.profilePicture} alt="" />
    <div>
      <div class="subject">
        <h1>{user.displayName || user.username}</h1>
        <div class="statuses">
          {#if message.repliesTo}
            <span class="lucide icon-reply"></span>
          {/if}
          {#if message.attachmentCount > 0}
            <span class="lucide icon-paperclip"></span>
          {/if}
        </div>
        <span class="timestamp">{date}</span>
      </div>
      <p>{message.title}</p>
    </div>
  </button>
{/if}
