<script lang="ts">
  import type { IMailbrokerManagerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { textToBlob } from "$ts/util/convert";
  import { BTN_OKAY_SUG, GetConfirmation, MessageBox } from "$ts/util/dialog";
  import type { Mailbroker } from "$types/server/mailbroker";
  import SentRecordHeader from "./ViewSentRecord/SentRecordHeader.svelte";

  interface PageProps {
    sentRecordId: string;
  }

  let {
    data,
    pageProps,
    process,
  }: {
    data: Mailbroker.SentMail;
    pageProps: PageProps;
    process: IMailbrokerManagerRuntime;
  } = $props();

  let showCode = $state<boolean>(false);
  let url = $derived(URL.createObjectURL(textToBlob(data.htmlContent, "text/html")));

  async function deleteSentRecord() {
    const proceed = await GetConfirmation(
      {
        title: "Delete sent record?",
        message: "Are you sure that you want to delete this sent record? This cannot be undone.",
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );

    if (!proceed) return;

    const result = await process.admin.deleteMailbrokerSentRecord(pageProps.sentRecordId);

    if (!result.success) {
      MessageBox(
        {
          title: "Failed to delete sent record",
          message: "An error occurred while trying to delete the sent record.",
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
          buttons: [BTN_OKAY_SUG],
        },
        process.pid,
        true
      );

      return;
    }

    process.switchPage("sent")
  }
</script>

<SentRecordHeader sentRecord={data} />

<div class="content-viewer">
  <textarea readonly class="text-content" value={data.textContent}></textarea>
  <div class="html-content">
    {#if showCode}
      <textarea readonly value={data.htmlContent}></textarea>
    {:else}
      <iframe src={url} frameborder="0" title="View sent record HTML"></iframe>
    {/if}
  </div>
</div>

<ActionBar>
  {#snippet leftContent()}
    <ActionIconButton suggested={!showCode} onclick={() => (showCode = false)} icon="eye" />
    <ActionIconButton suggested={showCode} onclick={() => (showCode = true)} icon="code" />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!process.admin.canAccess(AdminScopes.adminMailbrokerSentWrite)} suggested onclick={deleteSentRecord}>
      Delete...
    </ActionButton>
  {/snippet}
</ActionBar>
