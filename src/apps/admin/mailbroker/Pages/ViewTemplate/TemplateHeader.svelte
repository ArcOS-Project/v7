<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import type { ReadableStore } from "$types/shared/writable";
  import dayjs from "dayjs";
  import TemplatePills from "../../Mailbroker/TemplatePills.svelte";

  const {
    process,
    template,
    updateData,
    deprecated,
  }: {
    process: IMailbrokerRuntime;
    template: Mailbroker.MailTemplate;
    updateData: ReadableStore<Mailbroker.MailTemplateUpdate>;
    deprecated: boolean;
  } = $props();
</script>

<div class="template-header">
  <span class="lucide icon-book-dashed"></span>
  <div class="info">
    <h1>{$updateData.name} - ArcOS {$updateData.fromSuffix}</h1>
    <p class="subject">{$updateData.subjectContent}</p>
    <TemplatePills {template} {deprecated}/>
  </div>
  <div class="dates">
    <!-- {#if template.createdAt} -->
    <div class="date">
      <h2>Created at:</h2>
      <p>{dayjs(template.createdAt).format("D MMMM YYYY, HH:mm:ss")}</p>
    </div>
    <!-- {/if}
    {#if template.updatedAt} -->
    <div class="date">
      <h2>Updated at:</h2>
      <p>{dayjs(template.updatedAt).format("D MMMM YYYY, HH:mm:ss")}</p>
    </div>
    <!-- {/if} -->
  </div>
</div>
