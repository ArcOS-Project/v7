<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { Daemon } from "$ts/env";
  import type { ExpandedMessage, ExpandedMessageNode } from "$types/server/messaging";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import Header from "./MessageContent/Header.svelte";
  import MessageThread from "./MessageThread.svelte";

  const { process }: { process: IMessagingAppRuntime } = $props();
  const { message, buffer } = process;

  let expandThread = $state<boolean>(false);
  let loadingThread = $state<boolean>(false);
  let thread = $state<ExpandedMessageNode[]>();
  let reply = $state<ExpandedMessage | undefined>();

  async function update() {
    if (!$message) return;
    loadingThread = true;
    thread = await process.service.getMessageThread($message?._id!);
    reply = checkReplied(thread);
    loadingThread = false;
  }

  function checkReplied(thread: ExpandedMessageNode[]) {
    let reply: ExpandedMessage | undefined;

    for (const msg of thread) {
      const r = checkReplied(msg.replies);

      if (r) reply = r;
      else if (msg.repliesTo === $message?._id && msg.authorId === Daemon.userInfo._id) reply = msg;
    }

    return reply;
  }

  message.subscribe(update);
  onMount(update);
</script>

<div class="message-content">
  {#if $message}
    <Header {process} message={$message} />
    {#if reply}
      <div class="has-reply">
        <span class="lucide icon-info"></span>
        <span>You replied to this message on {dayjs(reply.createdAt).format("D MMMM YYYY, hh:mm A")}</span>
        <button class="link" onclick={() => process.readMessage(reply!._id, true)}>View</button>
      </div>
    {/if}
    <div class="message-body markdown-body">
      <SvelteMarkdown source={$message.body} />
    </div>
    {#if loadingThread}
      <div class="loading-thread">
        <HtmlSpinner height={16} thickness={2} />
        <p>Loading thread information...</p>
      </div>
    {:else if $message.repliesTo && thread?.length}
      <hr />
      <div class="thread-wrapper" class:expand={expandThread}>
        <div class="notice">
          <p>This message is part of a thread.</p>
          <button onclick={() => (expandThread = !expandThread)} class="link">{expandThread ? "Hide" : "Show"}</button>
        </div>
        {#if expandThread}
          {#each thread as threadMessage (threadMessage._id)}
            <MessageThread message={threadMessage} {process} originalMessageId={$message._id} />
          {/each}
        {/if}
      </div>
    {/if}
  {/if}
</div>
