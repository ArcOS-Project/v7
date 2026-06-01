<script lang="ts">
  import type { Mailbroker } from "$types/server/mailbroker";

  let { data }: { data: Mailbroker.MailLog[] } = $props();
</script>

<table class="data-table">
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
</table>