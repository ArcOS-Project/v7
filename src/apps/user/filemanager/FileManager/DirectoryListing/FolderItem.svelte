<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import dayjs from "dayjs";
  import type { FileManagerRuntime } from "../../runtime";
  import { RelativeTimeMod } from "$ts/dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { join } from "$ts/fs/util";

  const { process, dir }: { process: FileManagerRuntime; dir: FolderEntry } =
    $props();
  const { selection } = process;

  let date = $state<string>();
  let thisPath = $state<string>("");

  $effect(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(dir.dateModified).fromNow();
    thisPath = join(process.path(), dir.name);
  });

  function ondblclick() {
    process.navigate(thisPath);
  }

  function onclick() {
    process.selection.set([thisPath]);
  }
</script>

<button
  class="item folder"
  {ondblclick}
  {onclick}
  class:selected={$selection.includes(thisPath)}
>
  <div class="segment icon">
    <img src={FolderIcon} alt="" />
  </div>
  <div class="segment name">{dir.name}</div>
  <div class="segment type">Folder</div>
  <div class="segment size">-</div>
  <div class="segment modified">{date}</div>
</button>
