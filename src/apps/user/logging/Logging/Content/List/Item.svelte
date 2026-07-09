<script lang="ts">
  import { LogItemIcons } from "$apps/user/logging/store";
  import type { ILoggingRuntime } from "$interfaces/runtimes/ILoggingRuntime";
  import Icon from "$lib/Icon.svelte";
  import { LogLevel, type LogItem } from "$types/shared/logging";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  const { item, process }: { item: LogItem; process: ILoggingRuntime } = $props();
  let timestamp = $state("");
  let now = $state(0);

  onMount(() => {
    timestamp = dayjs(item.timestamp || 0).format("HH:mm:ss.mmm");

    setInterval(() => (now = new Date().getTime()));
  });
</script>

<div class="row item-{LogLevel[item.level]}" class:new={now && now < item.timestamp + 600}>
  <div class="segment icon">
    <Icon icon={LogItemIcons[item.level]!} />
  </div>
  <div class="segment timestamp">{timestamp}</div>
  <div class="segment message" title={item.message}><span>{item.message}</span></div>
</div>
