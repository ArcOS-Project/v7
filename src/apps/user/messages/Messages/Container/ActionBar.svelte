<script lang="ts">
  import type { MessagingAppRuntime } from "../../runtime";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message, messageWindow, messageFromFile } = process;
</script>

<div class="action-bar">
  {#if !messageWindow}
    <button class="compose suggested" onclick={() => process.compose()}>
      <span class="lucide icon-plus"></span>
      <span>Compose</span>
    </button>
  {/if}
  <div class="actions">
    <div class="reply-forward">
      <button
        class="lucide icon-reply"
        aria-label="Reply"
        disabled={!$message || messageFromFile}
        onclick={() => process.replyTo($message!)}
      ></button>
      <button class="lucide icon-forward" aria-label="Forward" disabled={!$message} onclick={() => process.forward($message!)}
      ></button>
    </div>
    <div class="sep"></div>
    <div class="modifiers">
      <button
        class="lucide icon-save"
        aria-label="Save"
        disabled={!$message || messageFromFile}
        onclick={() => process.saveMessage()}
      ></button>
      <button
        class="lucide icon-trash-2"
        aria-label="Delete"
        disabled={!$message || messageFromFile}
        onclick={() => $message && process.deleteMessage($message._id)}
      ></button>
      <button
        class="lucide"
        aria-label="Archive"
        disabled={!$message || messageFromFile}
        onclick={() => $message && process.toggleArchived($message)}
        class:icon-archive-x={$message && process.isArchived($message!._id)}
        class:icon-archive={$message && !process.isArchived($message!._id)}
      ></button>
    </div>
    {#if !messageWindow}
      <div class="sep"></div>
      <button class="lucide icon-rotate-cw" aria-label="Refresh" onclick={() => process.refresh()}></button>
    {/if}
  </div>
</div>
