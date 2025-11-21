<script lang="ts">
  import type { MessagingAppRuntime } from "$apps/user/messages/runtime";
  import { Daemon } from "$ts/server/user/daemon";
  import { formatBytes } from "$ts/util/fs";
  import type { MessageAttachment } from "$types/messaging";

  const { process, attachment }: { process: MessagingAppRuntime; attachment: MessageAttachment } = $props();
  const { message } = process;
</script>

{#if $message}
  <button
    class="attachment"
    title={`Name: ${attachment.filename}\nSize: ${formatBytes(attachment.size)}\nType: ${attachment.mimeType}`}
    ondblclick={() => process.openAttachment(attachment, $message._id)}
  >
    <img
      src={Daemon?.assoc?.getFileAssociation(attachment.filename)?.icon || process.getIconCached("DefaultMimeIcon")}
      alt=""
    />
    <p>
      <span class="filename">
        {attachment.filename}
      </span>
      <span class="size">{formatBytes(attachment.size)}</span>
    </p>
  </button>
{/if}
