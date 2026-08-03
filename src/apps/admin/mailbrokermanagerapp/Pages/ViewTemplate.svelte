<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { Store } from "$ts/writable";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { Unsubscriber } from "$types/shared/writable";
  import { onDestroy, onMount, tick } from "svelte";
  import TemplateEditor from "./ViewTemplate/TemplateEditor.svelte";
  import TemplateHeader from "./ViewTemplate/TemplateHeader.svelte";

  interface PageProps {
    templateId: string;
  }

  let {
    process,
    data,
    pageProps,
  }: {
    process: IMailbrokerRuntime;
    data: Mailbroker.MailTemplate;
    pageProps: PageProps;
  } = $props();

  let deprecated = $derived(data.deprecated);
  let modified = $state<boolean>(false);
  const updateData = Store<Mailbroker.MailTemplateUpdate>({});
  let unsubscriber: Unsubscriber;

  function discard() {
    updateData.set({
      fromSuffix: data.fromSuffix,
      htmlContent: data.htmlContent,
      subjectContent: data.subjectContent,
      name: data.name,
      textContent: data.textContent,
    });
    modified = false;
  }

  async function save() {
    await process.admin.updateMailbrokerTemplate(pageProps.templateId, updateData());
    data = { ...data, ...$updateData, updatedAt: new Date().toISOString() };
    discard();
  }

  async function toggleDeprecation() {
    if (deprecated) {
      await process.admin.undeprecateMailbrokerTemplate(pageProps.templateId);
      deprecated = false;
      data = data;
      tick();
    } else {
      await process.admin.deprecateMailbrokerTemplate(pageProps.templateId);
      deprecated = true;
      data = data;
      tick();
    }
  }

  onMount(() => {
    discard();
    let firstCall = false;

    unsubscriber = updateData.subscribe((v) => {
      if (!firstCall || !process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)) return (firstCall = true);
      modified = true;
    });
  });

  onDestroy(() => {
    unsubscriber?.();
  });
</script>

<TemplateHeader {process} template={data} {updateData} {deprecated} />
<TemplateEditor {updateData} {process} />
<ActionBar>
  {#snippet leftContent()}
    <ActionButton disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite)} onclick={toggleDeprecation}>
      {#if deprecated}
        Undeprecate
      {:else}
        Deprecate
      {/if}
    </ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton
      disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerSend)}
      onclick={() => process.spawnOverlay("SendOverlay", pageProps.templateId)}>Send...</ActionButton
    >
    <ActionButton disabled={!modified} onclick={discard}>Discard</ActionButton>
    <ActionButton suggested disabled={!modified} onclick={save}>Save</ActionButton>
  {/snippet}
</ActionBar>
