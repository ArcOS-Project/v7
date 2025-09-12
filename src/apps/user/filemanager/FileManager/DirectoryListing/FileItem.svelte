<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { RelativeTimeMod } from "$ts/dayjs";
  import { formatBytes, join } from "$ts/util/fs";
  import { getIconPath } from "$ts/images";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import type { FileEntry } from "$types/fs";
  import type { ArcShortcut } from "$types/shortcut";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";

  const { process, file }: { process: FileManagerRuntime; file: FileEntry } = $props();
  const { selection, shortcuts } = process;

  let date = $state<string>();
  let icon = $state<string>();
  let mime = $state<string>();
  let thisPath = $state<string>("");
  let extension = $state<string>();
  let thumbnail = $state<string>();
  let shortcut: ArcShortcut | undefined = $shortcuts[file.name];

  onMount(async () => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(new Date(file.dateModified).getTime() - 2000).fromNow();
    thisPath = join(process.path(), file.name);

    const split = file.name.split(".");
    const info = process.userDaemon?.assoc?.getFileAssociation(thisPath);
    extension = `.${split[split.length - 1]}`;
    mime = info?.friendlyName || "Unknown";
    icon = info?.icon || DefaultMimeIcon;

    if (info?.friendlyName === "Image file" && process.userPreferences().appPreferences.fileManager?.renderThumbnails)
      thumbnail = await process.userDaemon?.getThumbnailFor(thisPath);
  });

  function onclick(e: MouseEvent) {
    if (process.loadSave?.folder) return;

    process.updateSelection(e, thisPath);

    if (process.loadSave?.isSave) {
      process.saveName.set(file.name);
    }
  }

  function ondblclick() {
    if (process.loadSave && !process.loadSave?.folder && !process?.loadSave?.multiple) {
      process.confirmLoadSave();
      return;
    }
    if (process.loadSave) return;

    if (shortcut && shortcut.type === "folder") {
      process.navigate(shortcut.target);
      return;
    }

    process.userDaemon?.openFile(thisPath, shortcut);
  }
</script>

{#if thisPath && !(process?.loadSave?.extensions ? !!extension && !process?.loadSave?.extensions.includes(extension) : false)}
  <button
    class="item file"
    {onclick}
    class:selected={$selection.includes(thisPath)}
    {ondblclick}
    data-contextmenu={$selection.includes(thisPath) ? (shortcut ? "shortcut-item" : "file-item") : ""}
    use:contextProps={[file, thisPath, ondblclick, shortcut]}
    data-path={thisPath}
    class:is-shortcut={shortcut}
  >
    <div class="segment icon">
      <img src={shortcut ? getIconPath(shortcut.icon) : thumbnail || icon} alt="" />
      {#if shortcut}
        <span class="icon-arrow-up-right"></span>
      {/if}
    </div>
    <div class="segment name">{shortcut?.name || file.name}</div>
    <div class="segment type" title={mime}>{mime}</div>
    <div class="segment size">{shortcut ? "-" : formatBytes(file.size)}</div>
    <div class="segment modified">{shortcut ? "-" : date}</div>
  </button>
{/if}
