<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import TemplatePills from "../TemplatePills.svelte";

  let { template, process }: { template: Mailbroker.MailTemplate; process: IMailbrokerRuntime } = $props();

  async function viewTemplate() {
    process.switchPage("viewTemplate", { templateId: template._id });
  }
</script>

<button class="template-listing-option" onclick={viewTemplate}>
  <span class="lucide icon-book-dashed"></span>
  <div class="info">
    <h2>{template.name} - ArcOS {template.fromSuffix}</h2>
    <p class="subject">Subject: {template.subjectContent}</p>
    <TemplatePills {template} />
  </div>
</button>
