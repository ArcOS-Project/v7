<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { RelativeTimeMod } from "$ts/dayjs";
  import { join } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import type { FileManagerRuntime } from "../../runtime";
  import { onMount } from "svelte";

  const { process, dir }: { process: FileManagerRuntime; dir: FolderEntry } =
    $props();
  const { selection } = process;

  let date = $state<string>();
  let thisPath = $state<string>("");

  onMount(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(new Date(dir.dateModified).getTime() - 2000).fromNow();
    thisPath = join(process.path(), dir.name);
  });

  function ondblclick() {
    process.navigate(thisPath);
  }

  function onclick(e: MouseEvent) {
    if (process.loadSave) return;

    process.updateSelection(e, thisPath);
  }
</script>

{#if thisPath}
  <button
    class="item folder"
    {ondblclick}
    {onclick}
    class:selected={$selection.includes(thisPath)}
    data-contextmenu={$selection.includes(thisPath) ? "folder-item" : ""}
    use:contextProps={[dir, thisPath]}
    data-path={thisPath}
  >
    <div class="segment icon">
      <img src={FolderIcon} alt="" />
    </div>
    <div class="segment name">{dir.name}</div>
    <div class="segment type">Folder</div>
    <div class="segment size">-</div>
    <div class="segment modified">{date}</div>
  </button>
{/if}
