<script lang="ts">
  import { formatBytes } from "$ts/util/fs";
  import type { MessageComposerRuntime } from "../runtime";

  const { process }: { process: MessageComposerRuntime } = $props();
  const { title, body, recipients, sending, attachments } = process;
</script>

<div class="action-bar">
  <!-- Sum of attachments: https://stackoverflow.com/a/16751601 -->
  <div class="pill">
    <p class="caption">%actionBar.body%</p>
    <p class="value">{formatBytes($body.length)}</p>
  </div>
  <div class="pill">
    <p class="caption">%actionBar.attachments%</p>
    <p class="value">{formatBytes($attachments.map((a) => a.data.size).reduce((partialSum, a) => partialSum + a, 0))}</p>
  </div>
  <div class="actions">
    <button
      class="lucide icon-paperclip"
      title="%actionBar.addAttachment%"
      onclick={() => process.addAttachment()}
      aria-label="%actionBar.addAttachment%"
      disabled={$sending}
    ></button>
    <div class="sep"></div>
    <button
      class="lucide icon-trash-2 discard"
      title="%actionBar.discardMessage%"
      onclick={() => process.discard()}
      aria-label="%actionBar.discardMessage%"
      disabled={$sending}
    ></button>
    <button class="suggested" disabled={!$title || !$body || !$recipients.length || $sending} onclick={() => process.send()}
      >%actionBar.send%</button
    >
  </div>
</div>
