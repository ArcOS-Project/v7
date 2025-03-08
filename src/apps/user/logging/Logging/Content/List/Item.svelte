<script lang="ts">
  import { LogItemIcons } from "$apps/user/logging/store";
  import { LogLevel, type LogItem } from "$types/logging";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  const { item }: { item: LogItem } = $props();
  let timestamp = $state("");
  let now = $state(0);

  onMount(() => {
    timestamp = dayjs(item.timestamp || 0).format("HH:mm:ss.mmm");

    setInterval(() => (now = new Date().getTime()));
  });
</script>

<tr class="log-item item-{LogLevel[item.level]}" class:new={now && now < item.timestamp + 600}>
  <td class="icon">
    <img src={LogItemIcons[item.level]} alt={LogLevel[item.level]} />
  </td>
  <td class="source" title={item.source}>{item.source}</td>
  <td class="timestamp">{timestamp}</td>
  <td class="message" title={item.message}><span>{item.message}</span></td>
</tr>
