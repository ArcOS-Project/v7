<script lang="ts">
  import { forEach } from "jszip";
  import type { MessagingAppRuntime } from "../../runtime";
  import type { MessageAttachment } from "$types/messaging";
  import { Daemon } from "$ts/daemon";
  import { UserPaths } from "$ts/user/store";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import IconActionButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import IconActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";
  import Separator from "$lib/Window/ActionBar/ActionSeparator.svelte";

  const { process }: { process: MessagingAppRuntime } = $props();
  const { message, messageWindow, messageFromFile } = process;

  async function downloadAttachments() {
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Choose where to save the attachment",
      startDir: UserPaths.Downloads,
      icon: "MessagingIcon",
      folder: true,
    });

    if (!path) return;

    process.service.downloadAttachments(message()!, message()?.attachmentData!, path);
  }
</script>

<ActionBar>
  {#snippet leftContent()}
    {#if !messageWindow}
      <ActionButton suggested icon="plus" onclick={() => process.compose()}>Compose</ActionButton>
    {/if}
    {#if $message?.attachmentData?.length}
      <IconActionButton icon="file-down" onclick={downloadAttachments}></IconActionButton>
    {/if}
  {/snippet}
  {#snippet rightContent()}
    <IconActionGroup>
      <IconActionButton
        disabled={!$message || messageFromFile}
        title="Reply to message"
        icon="reply"
        onclick={() => process.replyTo($message!)}
      />
      <IconActionButton disabled={!$message} title="Forward message" icon="forward" onclick={() => process.forward($message!)} />
    </IconActionGroup>
    <Separator />

    <IconActionGroup>
      <IconActionButton
        icon="save"
        disabled={!$message || messageFromFile}
        onclick={() => process.saveMessage()}
        title="Save message to file..."
      ></IconActionButton>
      <IconActionButton
        icon="trash-2"
        disabled={!$message || messageFromFile}
        onclick={() => process.deleteMessage($message!._id)}
        title="Delete message"
      ></IconActionButton>
      <IconActionButton
        icon={$message && process.isArchived($message._id) ? "archive-x" : "archive"}
        disabled={!$message || messageFromFile}
        onclick={() => process.saveMessage()}
        title="Archive/unarchive message"
      ></IconActionButton>
    </IconActionGroup>
    {#if !messageWindow}
      <Separator />
      <IconActionButton icon="rotate-cw" title="Refresh" onclick={() => process.refresh()}></IconActionButton>
    {/if}
  {/snippet}
</ActionBar>
