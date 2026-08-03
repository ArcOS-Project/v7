<script lang="ts">
  import { formatBytes } from "$ts/util/fs";
  import type { Mailbroker } from "$types/server/mailbroker";

  let { sentRecord }: { sentRecord: Mailbroker.SentMail } = $props();
</script>

<div class="template-pills">
  <div class="pill size">
    <span class="lucide icon-code"></span>
    <span>{formatBytes(sentRecord.htmlContent.length)}</span>
  </div>
  <div class="pill size">
    <span class="lucide icon-text-align-start"></span>
    <span>{formatBytes(sentRecord.textContent.length)}</span>
  </div>
  {#if sentRecord.to.username && sentRecord.to.serverName}
    <div class="pill clr-blue">
      <span class="lucide icon-user-round"></span>
      <span>To a user</span>
    </div>
  {/if}
</div>
