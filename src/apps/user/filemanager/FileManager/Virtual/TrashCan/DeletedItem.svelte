<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { RelativeTimeMod } from "$ts/dayjs";
  import type { TrashIndexNode } from "$types/trash";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount } from "svelte";

  const { process, item, uuid }: { process: FileManagerRuntime; item: TrashIndexNode; uuid: string } = $props();
  const { selection } = process;

  let date = $state<string>();

  onMount(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(new Date(item.timestamp).getTime() - 2000).fromNow();
  });

  function onclick(e: MouseEvent) {
    process.updateSelection(e, uuid);
  }
</script>

<button class="item file deleted" {onclick} class:selected={$selection.includes(uuid)} data-path={uuid}>
  <div class="segment icon"><img src={process.getIconCached(item.icon)} alt="" /></div>
  <div class="segment name">{item.name}</div>
  <div class="segment type"></div>
  <div class="segment modified">{date}</div>
</button>
