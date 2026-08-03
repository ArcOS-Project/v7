<script lang="ts">
  import type { IMailbrokerRuntime } from "$interfaces/runtimes/IMailbrokerRuntime";
  import type { Mailbroker } from "$types/server/mailbroker";
  import SentRecordPills from "../../MailbrokerManager/SentRecordPills.svelte";

  let { process, sentRecord }: { process: IMailbrokerRuntime; sentRecord: Mailbroker.SentMail } = $props();
</script>

<button class="sent-listing-option" onclick={() => process.switchPage("viewSentRecord", { sentRecordId: sentRecord._id })}>
  <span class="lucide icon-send"></span>
  <div class="info">
    <h2>{sentRecord.subject}</h2>
    {#if sentRecord.to.serverName && sentRecord.to.username}
      <p class="recipient">From {sentRecord.to.serverName}, to {sentRecord.to.email} ({sentRecord.to.username})</p>
    {:else}
      <p class="recipient">To {sentRecord.to.email}</p>
    {/if}
    <SentRecordPills {sentRecord} />
  </div>
</button>
