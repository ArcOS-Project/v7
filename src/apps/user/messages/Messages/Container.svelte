<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import type { MessagingAppRuntime } from "../runtime";
  import ActionBar from "./Container/ActionBar.svelte";
  import AttachmentBar from "./Container/AttachmentBar.svelte";
  import MessageContent from "./Container/MessageContent.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message, loading, messageNotFound, messageWindow } = process;
</script>

<div class="container" class:full={messageWindow}>
  <CustomTitlebar {process} />
  {#if $loading}
    <div class="center-notice">
      <Spinner height={32} />
    </div>
  {:else if $message}
    <MessageContent {process} />
    <AttachmentBar {process} />
  {:else if $messageNotFound}
    <div class="center-notice">
      <img src={process.getIconCached("BadStatusIcon")} alt="" />
      <h1>Message not found!</h1>
      <p>The message you tried to open could not be found.</p>
    </div>
  {:else}
    <div class="center-notice">
      <img src={process.getIconCached("MessagingIcon")} alt="" />
      <h1>Nothing is selected</h1>
      <p>Click on a message to read it.</p>
    </div>
  {/if}
  <ActionBar {process} />
</div>
