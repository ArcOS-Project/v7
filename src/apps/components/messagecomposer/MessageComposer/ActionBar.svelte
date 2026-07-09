<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import IconActionButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import Pill from "$lib/Window/ActionBar/ActionPill.svelte";
  import Separator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import { formatBytes } from "$ts/util/fs";

  const { process }: { process: IMessageComposerRuntime } = $props();
  const { title, body, recipients, sending, attachments } = process;
</script>

<ActionBar>
  {#snippet leftContent()}
    <Pill key={"%actionBar.body%"}>{formatBytes($body.length)}</Pill>
    <Pill key={"%actionBar.attachments%"}>{formatBytes($attachments.map((a) => a.data.size).reduce((a, b) => a + b, 0))}</Pill>
  {/snippet}
  {#snippet rightContent()}
    <IconActionButton icon="paperclip" title="%actionBar.addAttachment%" disabled={$sending} onclick={() => process.addAttachment()} />
    <Separator />
    <IconActionButton
      icon="trash-2"
      title="%actionBar.discardMessage%"
      disabled={$sending}
      onclick={() => process.discard()}
      aria-label="%actionBar.discardMessage%"
      disabled={$sending}
    ></button>
    <button class="suggested" disabled={!$title || !$body || !$recipients.length || $sending} onclick={() => process.send()}
      >%actionBar.send%</button
    >
  </div>
</div>
