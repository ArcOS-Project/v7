<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import type { ExpandedMessageNode } from "$types/server/messaging";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import Header from "./MessageContent/Header.svelte";
  import MessageThread from "./MessageThread.svelte";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";

  const { process }: { process: IMessagingAppRuntime } = $props();
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
