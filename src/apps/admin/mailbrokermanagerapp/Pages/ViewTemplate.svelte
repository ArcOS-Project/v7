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
  import { BTN_CANCEL, BTN_OKAY_SUG, GetConfirmation, MessageBox } from "$ts/util/dialog";

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

  async function deleteTemplate() {
    if (!deprecated) return;

    const proceed = await GetConfirmation(
      {
        title: "Delete template?",
        message:
          "Are you absolutely sure that you want to delete this deprecated mailbroker template? This cannot be reverted, and may have unforseen consequences if the template is still used by ArcOS systems.",
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );

    if (!proceed) return;

    const result = await process.admin.deleteMailbrokerTemplate(data._id);

    if (!result.success) {
      MessageBox(
        {
          title: "Failed to delete",
          message: `An error occurred while attempting to delete the mailbroker template. ${result.errorMessage ?? "Unknown failure"}`,
          buttons: [BTN_OKAY_SUG],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        process.pid,
        true
      );
      return;
    }

    process.switchPage("activeTemplates");
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
    <ActionButton
      disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerTemplatesWrite) || !deprecated}
      onclick={deleteTemplate}>Delete</ActionButton
    >
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
