<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { MessagingAppRuntime } from "../runtime";
  import AttachmentBar from "./Container/AttachmentBar.svelte";
  import MessageContent from "./Container/MessageContent.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
</script>

<div class="container">
  <CustomTitlebar {process} />
  {#if $message}
    <MessageContent {process} />
    <AttachmentBar {process} />
  {:else}
    <div class="center-notice">
      <h1>Nothing is selected</h1>
      <p>Click on a message to read it.</p>
    </div>
  {/if}
</div>
