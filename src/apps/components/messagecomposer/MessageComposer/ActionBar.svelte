<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import IconActionButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import Pill from "$lib/Window/ActionBar/ActionPill.svelte";
  import Separator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { MessageComposerRuntime } from "../runtime";

  const { process }: { process: MessageComposerRuntime } = $props();
  const { title, body, recipients, sending, attachments } = process;
</script>

<ActionBar>
  {#snippet leftContent()}
    <Pill key={"Body"}>{formatBytes($body.length)}</Pill>
    <Pill key={"Attachments"}>{formatBytes($attachments.map((a) => a.data.size).reduce((a, b) => a + b, 0))}</Pill>
  {/snippet}
  {#snippet rightContent()}
    <IconActionButton icon="paperclip" title="Add attachment" disabled={$sending} onclick={() => process.addAttachment()} />
    <Separator />
    <IconActionButton
      icon="trash-2"
      title="Discard message"
      disabled={$sending}
      onclick={() => process.discard()}
      className="discard-button"
    />
    <ActionButton suggested disabled={!$title || !$body || !$recipients.length} loading={$sending} onclick={() => process.send()}>
      Send
    </ActionButton>
  {/snippet}
</ActionBar>
