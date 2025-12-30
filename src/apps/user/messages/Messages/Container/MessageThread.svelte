<script lang="ts">
  import { authcode } from "$ts/util";
  import type { MessageNode } from "$types/messaging";
  import type { MessagingAppRuntime } from "../../runtime";
  import MessageThread from "./MessageThread.svelte";

  const {
    message,
    process,
    originalMessageId,
  }: { message: MessageNode; process: MessagingAppRuntime; originalMessageId: string } = $props();
  const pfp = `${process.service.serverUrl}/user/pfp/${message.authorId}${authcode()}`;
</script>

<div class="message-thread">
  <button class="thread-item">
    <img src={pfp} alt="" />
    <div class="info">
      <h1>{message.author?.username}</h1>
      <p>{message.title}</p>
    </div>
  </button>
  {#if message.replies}
    <div class="sub-thread">
      {#each message.replies as subMessage (subMessage._id)}
        <MessageThread message={subMessage} {process} {originalMessageId} />
      {/each}
    </div>
  {/if}
</div>
