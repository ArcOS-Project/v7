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

<div class="row item-{LogLevel[item.level]}" class:new={now && now < item.timestamp + 600}>
  <div class="segment icon">
    <img src={LogItemIcons[item.level]} alt={LogLevel[item.level]} />
  </div>
  <div class="segment timestamp">{timestamp}</div>
  <div class="segment message" title={item.message}><span>{item.message}</span></div>
</div>
