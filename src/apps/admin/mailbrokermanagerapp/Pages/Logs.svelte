<script lang="ts">
  import type { Mailbroker } from "$types/server/mailbroker";
  import dayjs from "dayjs";

  let { data }: { data: Mailbroker.MailLog[] } = $props();
</script>

<table class="data-table">
  <thead>
    <tr>
      <th class="icon"></th>
      <th>Code</th>
      <th>Message</th>
      <th>Details</th>
      <th>When?</th>
    </tr>
  </thead>
  <colgroup>
    <col width="1%" />
    <col width="1%" />
    <col width="20%" />
    <col width="30%" />
    <col width="1%" />
  </colgroup>
  <tbody>
    {#each data.toReversed() as log (log._id)}
      <tr>
        <td class="icon">
          <span
            class="lucide"
            class:icon-info={log.code.startsWith("I")}
            class:icon-triangle-alert={log.code.startsWith("W")}
            class:icon-circle-x={log.code.startsWith("E")}
          ></span>
        </td>
        <td>{log.code}</td>
        <td>{log.message}</td>
        <td class:empty={!log.details}>{log.details}</td>
        <td>{dayjs(log.createdAt).format("D MMM YYYY, HH:mm:ss")}</td>
      </tr>
    {/each}
  </tbody>
</table>
