<script lang="ts">
  import type { Mailbroker } from "$types/server/mailbroker";

  let { data }: { data: Mailbroker.SentMail[] } = $props();
</script>

{data.length}
