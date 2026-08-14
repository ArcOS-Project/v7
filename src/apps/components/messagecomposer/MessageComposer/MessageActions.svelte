<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";

  const { process }: { process: IMessageComposerRuntime } = $props();
  const { title, body, recipients, sending, attachments, showPreview } = process;
</script>

<ActionBar onTop>
  {#snippet leftContent()}
    <ActionButton icon="paperclip" title="Add attachment" disabled={$sending} onclick={() => process.addAttachment()}>
      Attach...
    </ActionButton>
    <ActionButton icon="signature" title="Add signature" disabled={$sending} onclick={() => process.addSignature()}>
      Signature...
    </ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionGroup>
      <ActionIconButton suggested={$showPreview} onclick={() => ($showPreview = true)} icon="eye"></ActionIconButton>
      <ActionIconButton suggested={!$showPreview} onclick={() => ($showPreview = false)} icon="code-xml"></ActionIconButton>
    </ActionGroup>
  {/snippet}
</ActionBar>
