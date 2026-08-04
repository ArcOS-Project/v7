<script lang="ts">
  import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { ReadableStore } from "$types/shared/writable";
  import GeneralTab from "./TemplateEditor/GeneralTab.svelte";
  import HtmlContentTab from "./TemplateEditor/HtmlContentTab.svelte";
  import TextContentTab from "./TemplateEditor/TextContentTab.svelte";

  let { process, updateData }: { process: IMailbrokerManagerRuntime; updateData: ReadableStore<Mailbroker.MailTemplateUpdate> } =
    $props();

  const tabs: Record<string, any> = {
    General: GeneralTab,
    HTML: HtmlContentTab,
    Text: TextContentTab,
  };
  let selected = $state<string>("General");
  let Component = $derived(tabs[selected]);
</script>

<div class="template-editor">
  <div class="editor-tabs">
    {#each Object.entries(tabs) as [tab]}
      <button class="tab" class:selected={tab === selected} onclick={() => (selected = tab)}>{tab}</button>
    {/each}
  </div>
  <div class="tab-content tab-{selected.toLowerCase()}">
    {#if Component}
      <Component {process} {updateData} />
    {/if}
  </div>
</div>
