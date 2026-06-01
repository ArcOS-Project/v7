<script lang="ts">
  import type { Mailbroker } from "$types/server/mailbroker";

  let { data }: { data: Mailbroker.MailTemplate[] } = $props();
</script>

{data.length}
