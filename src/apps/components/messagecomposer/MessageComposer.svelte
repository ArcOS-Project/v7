<script lang="ts">
  import MarkdownEditorComponent from "$lib/MarkdownEditorComponent.svelte";
  import ActionBar from "./MessageComposer/ActionBar.svelte";
  import AttachmentBar from "./MessageComposer/AttachmentBar.svelte";
  import SubjectField from "./MessageComposer/SubjectField.svelte";
  import ToField from "./MessageComposer/ToField.svelte";
  import type { MessageComposerRuntime } from "./runtime";

  const { process }: { process: MessageComposerRuntime } = $props();
  const { body, sending } = process;
</script>

<div class="fields">
  <ToField {process} />
  <SubjectField {process} />
</div>
<div class="message-body">
  <MarkdownEditorComponent bind:value={$body} />
</div>
<AttachmentBar {process} />
<ActionBar {process} />
