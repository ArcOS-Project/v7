<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { ExpandedMessageNode } from "$types/messaging";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import type { MessagingAppRuntime } from "../../runtime";
  import Header from "./MessageContent/Header.svelte";
  import MessageThread from "./MessageThread.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;

  let expandThread = $state<boolean>(false);
  let loadingThread = $state<boolean>(false);
  let thread = $state<ExpandedMessageNode[]>();

  onMount(async () => {
    if (!$message) return;

    loadingThread = true;
    thread = await process.service.getMessageThread($message?._id!);
    loadingThread = false;
  });
</script>

<div class="message-content">
  {#if $message}
    <Header {process} message={$message} />
    <div class="message-body markdown-body">
      <SvelteMarkdown source={$message.body} />
    </div>
    {#if loadingThread}
      <div class="thread-wrapper">
        <div class="notice">
          <p>Loading thread information...</p>
          <Spinner height={30} />
        </div>
      </div>
    {/if}
    {#if $message.repliesTo && thread?.length}
      <div class="thread-wrapper" class:expand={expandThread}>
        <div class="notice">
          <p>This message is part of a thread.</p>
          <button onclick={() => (expandThread = !expandThread)}>{expandThread ? "Hide" : "Show"}</button>
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
