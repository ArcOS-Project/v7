<script lang="ts">
  import { formatBytes } from "$ts/util/fs";
  import type { Mailbroker } from "$types/server/mailbroker";

  let { template }: { template: Mailbroker.MailTemplate } = $props();
</script>

<div class="template-pills">
  <div class="pill size">
    <span class="lucide icon-code"></span>
    <span>{formatBytes(template.htmlContent.length)}</span>
  </div>
  <div class="pill size">
    <span class="lucide icon-text-align-start"></span>
    <span>{formatBytes(template.textContent.length)}</span>
  </div>
  {#if template.deprecated}
    <div class="pill clr-orange">Deprecated</div>
  {/if}
</div>
