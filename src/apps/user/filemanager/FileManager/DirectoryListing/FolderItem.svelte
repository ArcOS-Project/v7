<script lang="ts">
  import { RelativeTimeMod } from "$ts/dayjs";
  import { contextProps } from "$ts/ui/context/actions.svelte";
  import { join } from "$ts/util/fs";
  import type { FsProxyInfo, FolderEntry } from "$types/fs";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";
  import { Fs } from "$ts/env";

  const { process, dir }: { process: FileManagerRuntime; dir: FolderEntry } = $props();
  const { selection } = process;

  let date = $state<string>();
  let thisPath = $state<string>("");
  let proxy = $state<FsProxyInfo | undefined>();

  onMount(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(new Date(dir.dateModified).getTime() - 2000).fromNow();
    thisPath = join(process.path(), dir.name);
    proxy = Fs.tryGetProxyInfo(thisPath, true);
  });

  function ondblclick() {
    process.navigate(thisPath);
  }

  function onclick(e: MouseEvent) {
    if (process.loadSave && !process.loadSave.folder) return;

    process.updateSelection(e, thisPath);
  }
</script>

{#if thisPath}
  <button
    class="item folder"
    {ondblclick}
    {onclick}
    class:selected={$selection.includes(thisPath)}
    class:proxy={!!proxy}
    data-contextmenu={$selection.includes(thisPath) ? "folder-item" : ""}
    use:contextProps={[dir, thisPath]}
    data-path={thisPath}
  >
    <div class="segment icon">
      <img src={process.getIconCached("FolderIcon")} alt="" />
    </div>
    <div class="segment name" title={dir.name}>{proxy?.displayName ?? dir.name}</div>
    <div class="segment type">Folder</div>
    <div class="segment size">-</div>
    <div class="segment modified">{date}</div>
  </button>
{/if}
