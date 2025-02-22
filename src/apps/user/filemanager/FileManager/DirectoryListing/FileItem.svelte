<script lang="ts">
  import { RelativeTimeMod } from "$ts/dayjs";
  import { formatBytes, getMimeIcon, join } from "$ts/fs/util";
  import type { FileEntry } from "$types/fs";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { fromMime } from "human-filetypes";
  import type { FileManagerRuntime } from "../../runtime";

  const { process, file }: { process: FileManagerRuntime; file: FileEntry } =
    $props();
  const { selection } = process;

  let date = $state<string>();
  let icon = $state<string>();
  let mime = $state<string>();
  let thisPath = $state<string>("");

  $effect(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(new Date(file.dateModified).getTime() - 2000).fromNow();

    const m = fromMime(file.mimeType);

    mime = m.replace(m[0], m[0].toUpperCase());
    icon = getMimeIcon(file.name);
    thisPath = join(process.path(), file.name);
  });

  function onclick(e: MouseEvent) {
    process.updateSelection(e, thisPath);
  }
</script>

<button
  class="item file"
  {onclick}
  class:selected={$selection.includes(thisPath)}
  ondblclick={() => process.openFile(thisPath)}
  data-contextmenu={$selection.includes(thisPath) ? "file-item" : ""}
>
  <div class="segment icon">
    <img src={icon} alt="" />
  </div>
  <div class="segment name">{file.name}</div>
  <div class="segment type">{mime}</div>
  <div class="segment size">{formatBytes(file.size)}</div>
  <div class="segment modified">{date}</div>
</button>
