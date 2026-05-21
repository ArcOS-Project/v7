<script lang="ts">
  import type { IMessagingAppRuntime } from "$interfaces/runtimes/IMessagingAppRuntime";
  import { Daemon } from "$ts/env";
  import { contextProps } from "$ts/ui/context/actions.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { MessageAttachment } from "$types/messaging";

  const { process, attachment }: { process: IMessagingAppRuntime; attachment: MessageAttachment } = $props();
  const { message } = process;
</script>

{#if $message}
  <button
    class="attachment"
    title={`Name: ${attachment.filename}\nSize: ${formatBytes(attachment.size)}\nType: ${attachment.mimeType}`}
    ondblclick={() => process.openAttachment(attachment, $message._id)}
    data-contextmenu="message-attachment"
    use:contextProps={[message, attachment]}
  >
    <img src={Daemon?.assoc?.getFileAssociation(attachment.filename)?.icon || process.getIconCached("DefaultMimeIcon")} alt="" />
    <p>
      <span class="filename">
        {attachment.filename}
      </span>
      <span class="size">{formatBytes(attachment.size)}</span>
    </p>
  </button>
{/if}
