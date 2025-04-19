<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";
  import { RelativeTimeMod } from "$ts/dayjs";
  import type { PartialMessage } from "$types/messaging";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount, type Snippet } from "svelte";

  const { process, message, children }: { process: MessagingAppRuntime; message: PartialMessage; children?: Snippet } = $props();
  const { message: openedMessage } = process;
  let date = $state<string>();

  onMount(async () => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);
    date = dayjs(message.createdAt).fromNow();
  });
</script>

{#if message.author}
  <button
    class="message"
    onclick={() => process.readMessage(message._id)}
    class:selected={$openedMessage?._id === message._id}
    ondblclick={() => process.popoutMessage(message._id)}
  >
    <img src={message.author.profilePicture} alt="" />
    <div>
      <div class="subject">
        <h1>{message.author.displayName || message.author.username}</h1>
        <div class="statuses">
          {#if message.repliesTo}
            <span class="lucide icon-reply"></span>
          {/if}
          {#if message.attachmentCount > 0}
            <span class="lucide icon-paperclip"></span>
          {/if}
        </div>
        <span class="timestamp">{date}</span>
        {#if children}
          {@render children()}
        {/if}
      </div>
      <p>{message.title}</p>
    </div>
  </button>
{/if}
