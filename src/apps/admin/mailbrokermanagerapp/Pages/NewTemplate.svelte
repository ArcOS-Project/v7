<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
  import { Store } from "$ts/writable";
  import type { Mailbroker } from "$types/server/mailbroker";
  import TemplateEditor from "./ViewTemplate/TemplateEditor.svelte";

  let { process }: { process: IMailbrokerRuntime } = $props();

  let data = Store<Mailbroker.MailTemplateUpdate>({
    fromSuffix: "Accounts",
    subjectContent: "",
    htmlContent: "",
    textContent: "",
  });

  async function save() {
    const result = await process.admin.createMailbrokerTemplate(data() as Mailbroker.MailTemplateCreate);

    if (!result.success) {
      MessageBox(
        {
          title: "Failed to create template",
          message: `An error occurred while attempting to create the template. ${result.errorMessage ?? "Unknown failure"}`,
          buttons: [BTN_OKAY_SUG],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        process.pid,
        true
      );
    } else {
      process.switchPage("viewTemplate", { templateId: result.result._id });
    }
  }
</script>

<TemplateEditor updateData={data} {process} />

<ActionBar>
  {#snippet rightContent()}
    <ActionButton
      suggested
      onclick={save}
      disabled={!$data.fromSuffix || !$data.subjectContent || !$data.htmlContent || !$data.textContent}
    >
      Save
    </ActionButton>
  {/snippet}
</ActionBar>
