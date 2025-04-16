<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import type { MessagingAppRuntime } from "../../runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
</script>

<div class="attachment-bar" class:visible={$message && $message.attachments.length}>
  {#if $message && $message.attachments.length}
    {#each $message.attachments as attachment (attachment._id)}
      <button
        class="attachment"
        title={`Name: ${attachment.filename}\nSize: ${formatBytes(attachment.size)}\nType: ${attachment.mimeType}`}
        ondblclick={() => process.openAttachment(attachment, $message._id)}
      >
        <img src={process.userDaemon!.getMimeIconByFilename(attachment.filename) || DefaultMimeIcon} alt="" />
        <p>
          <span class="filename">
            {attachment.filename}
          </span>
          <span class="size">{formatBytes(attachment.size)}</span>
        </p>
      </button>
    {/each}
  {/if}
</div>
