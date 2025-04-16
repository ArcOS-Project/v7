<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import type { MessagingAppRuntime } from "../../runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message } = process;
</script>

{#if $message && $message.attachments.length}
  <div class="attachment-bar">
    {#each $message.attachments as attachment (attachment._id)}
      <button
        class="attachment"
        title="Name: {attachment.filename}\nSize: {formatBytes(attachment.size)}\nType: {attachment.mimeType}"
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
  </div>
{/if}
