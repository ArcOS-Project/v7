<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { MessagingIcon } from "$ts/images/apps";
  import type { MessagingAppRuntime } from "../runtime";
  import AttachmentBar from "./Container/AttachmentBar.svelte";
  import MessageContent from "./Container/MessageContent.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message, loading } = process;
</script>

<div class="container">
  <CustomTitlebar {process} />
  {#if $loading}
    <div class="center-notice">
      <Spinner height={32} />
    </div>
  {:else if $message}
    <MessageContent {process} />
    <AttachmentBar {process} />
  {:else}
    <div class="center-notice">
      <img src={MessagingIcon} alt="" />
      <h1>Nothing is selected</h1>
      <p>Click on a message to read it.</p>
    </div>
  {/if}
  <div class="action-bar">
    <button class="compose suggested">
      <span class="lucide icon-plus"></span>
      <span>Compose</span>
    </button>
  </div>
</div>
