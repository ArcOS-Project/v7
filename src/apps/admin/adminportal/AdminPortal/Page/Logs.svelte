<script lang="ts">
  import type { ServerLogItem } from "$types/admin";
  import dayjs from "dayjs";

  const { data }: { data: { logs: ServerLogItem[] } } = $props();
</script>

<textarea name="" id="" autocomplete="off" autocapitalize="off" spellcheck="false" readonly
  >{data.logs
    .map((l) => `[${dayjs(l.timestamp).format("DD-MM-YYYY HH:mm:ss")}] ${l.subs.join(": ")}: ${l.origin}: ${l.message}`)
    .join("\n")}</textarea
>
