<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import ActionBar from "./MessageComposer/ActionBar.svelte";
  import AttachmentBar from "./MessageComposer/AttachmentBar.svelte";
  import SubjectField from "./MessageComposer/SubjectField.svelte";
  import ToField from "./MessageComposer/ToField.svelte";

  const { process }: { process: IMessageComposerRuntime } = $props();
  const { body, sending } = process;
</script>

<div class="fields">
  <ToField {process} />
  <SubjectField {process} />
</div>
<div class="message-body">
  <textarea name="" id="" bind:value={$body} disabled={$sending}></textarea>
</div>
<AttachmentBar {process} />
<ActionBar {process} />
