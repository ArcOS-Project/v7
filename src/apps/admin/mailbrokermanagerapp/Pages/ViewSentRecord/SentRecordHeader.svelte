<script lang="ts">
  import type { Mailbroker } from "$types/server/mailbroker";
  import dayjs from "dayjs";
  import SentRecordPills from "../../MailbrokerManager/SentRecordPills.svelte";

  let { sentRecord }: { sentRecord: Mailbroker.SentMail } = $props();
</script>

<div class="sent-record-header">
  <span class="lucide icon-send"></span>
  <div class="info">
    <h1>{sentRecord.subject}</h1>
    {#if sentRecord.to.serverName && sentRecord.to.username}
      <p class="recipient">From {sentRecord.to.serverName}, to {sentRecord.to.email} ({sentRecord.to.username})</p>
    {:else}
      <p class="recipient">To {sentRecord.to.email}</p>
    {/if}
    <SentRecordPills {sentRecord} />
  </div>

  <div class="dates">
    {#if sentRecord.createdAt}
      <div class="date">
        <h2>Created at:</h2>
        <p>{dayjs(sentRecord.createdAt).format("D MMMM YYYY, HH:mm:ss")}</p>
      </div>
    {/if}
    {#if sentRecord.updatedAt}
      <div class="date">
        <h2>Updated at:</h2>
        <p>{dayjs(sentRecord.updatedAt).format("D MMMM YYYY, HH:mm:ss")}</p>
      </div>
    {/if}
  </div>
</div>
