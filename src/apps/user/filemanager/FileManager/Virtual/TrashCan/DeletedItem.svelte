<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { maybeIconId } from "$ts/images";
  import type { TrashIndexNode } from "$types/trash";
  import dayjs from "dayjs";
  import { onMount } from "svelte";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { RelativeTimeMod } from "$ts/dayjs";

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

<button
  class="item file deleted"
  {onclick}
  class:selected={$selection.includes(uuid)}
  data-path={uuid}
  ondblclick={() => process.notImplemented("Viewing deleted item")}
>
  <div class="segment icon"><img src={maybeIconId(item.icon)} alt="" /></div>
  <div class="segment name">{item.name}</div>
  <div class="segment type"></div>
  <div class="segment modified">{date}</div>
</button>
