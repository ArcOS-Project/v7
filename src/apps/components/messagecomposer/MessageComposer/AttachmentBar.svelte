<script lang="ts">
  import { formatBytes } from "$ts/util/fs";
  import type { MessageComposerRuntime } from "../runtime";

  const { process }: { process: MessageComposerRuntime } = $props();
  const { attachments, sending } = process;
</script>

{#if $attachments.length}
  <div class="attachment-bar">
    {#each $attachments as attachment, i (`${attachment.uuid}-${i}`)}
      <div class="attachment">
        <img
          src={process.userDaemon?.assoc?.getFileAssociation(attachment.data.name)?.icon ||
            process.getIconCached("DefaultMimeIcon")}
          alt=""
        />
        <span>{attachment.data.name}</span>
        <span class="size">({formatBytes(attachment.data.size)})</span>
        <button
          class="lucide icon-x"
          aria-label="Remove attachment"
          onclick={() => process.removeAttachment(attachment.uuid)}
          disabled={$sending}
          title="Remove attachment"
        >
        </button>
      </div>
    {/each}
  </div>
{/if}
