<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import Attachment from "./AttachmentBar/Attachment.svelte";

  const { process }: { process: IMessagingAppRuntime } = $props();
  const { message } = process;
</script>

{#if $message && $message.attachmentData?.length}
  <div class="attachment-bar" class:visible={$message && $message.attachmentData?.length}>
    {#each $message.attachmentData as attachment (attachment._id)}
      <Attachment {process} {attachment} />
    {/each}
  </div>
{/if}
