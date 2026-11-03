<script lang="ts">
  import type { IMessageComposerRuntime } from "$interfaces/runtimes/IMessageComposerRuntime";
  import SvelteMarkdown from "svelte-markdown";
  import AttachmentBar from "./MessageComposer/AttachmentBar.svelte";
  import MessageActions from "./MessageComposer/MessageActions.svelte";
  import StatusBar from "./MessageComposer/StatusBar.svelte";
  import SubjectField from "./MessageComposer/SubjectField.svelte";
  import ToField from "./MessageComposer/ToField.svelte";

  const { process }: { process: IMessageComposerRuntime } = $props();
  const { body, sending, showPreview } = process;
</script>

<MessageActions {process} />
<div class="fields">
  <ToField {process} />
  <SubjectField {process} />
</div>
<div class="message-body">
  {#if $showPreview}
    <div class="markdown-body">
      <SvelteMarkdown source={$body} />
    </div>
  {:else}
    <textarea name="" id="" bind:value={$body} disabled={$sending}></textarea>
  {/if}
</div>
<AttachmentBar {process} />
<StatusBar {process} />
