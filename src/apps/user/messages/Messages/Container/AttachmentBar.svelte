<script lang="ts">
  import type { MessagingAppRuntime } from "../../runtime";
  import Attachment from "./AttachmentBar/Attachment.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
</script>

<div class="attachment-bar" class:visible={$message && $message.attachments.length}>
  {#if $message && $message.attachments.length}
    {#each $message.attachments as attachment (attachment._id)}
      <Attachment {process} {attachment} />
    {/each}
  {/if}
</div>
