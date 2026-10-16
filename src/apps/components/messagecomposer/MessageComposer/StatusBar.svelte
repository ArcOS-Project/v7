<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import IconActionButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ActionPill from "$lib/Window/ActionBar/ActionPill.svelte";
  import { formatBytes } from "$ts/util/fs";

  let { process }: { process: IMessageComposerRuntime } = $props();
  const { body, attachments, sending, title, recipients } = process;
</script>

<ActionBar>
  {#snippet leftContent()}
    <ActionPill key={"Body"}>{formatBytes($body.length)}</ActionPill>
    <ActionPill key={"Attachments"}>{formatBytes($attachments.map((a) => a.data.size).reduce((a, b) => a + b, 0))}</ActionPill>
  {/snippet}
  {#snippet rightContent()}
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
