<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { RelativeTimeMod } from "$ts/dayjs";
  import { formatBytes, join } from "$ts/fs/util";
  import { getIconPath } from "$ts/images";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import type { FileEntry } from "$types/fs";
  import type { ArcShortcut } from "$types/shortcut";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";
  import { fromMime } from "human-filetypes";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";

  const { process, file }: { process: FileManagerRuntime; file: FileEntry } = $props();
  const { selection, userDaemon, shortcuts } = process;

  let date = $state<string>();
  let icon = $state<string>();
  let mime = $state<string>();
  let thisPath = $state<string>("");
  let extension = $state<string>();
  let shortcut: ArcShortcut | undefined = $shortcuts[file.name];

  onMount(() => {
    dayjs.extend(relativeTime);
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", RelativeTimeMod);

    date = dayjs(new Date(file.dateModified).getTime() - 2000).fromNow();

    const m = fromMime(file.mimeType);
    const split = file.name.split(".");

    mime = m.replace(m[0], m[0].toUpperCase());
    icon = userDaemon?.getMimeIconByFilename(file.name) || DefaultMimeIcon;
    thisPath = join(process.path(), file.name);
    extension = `.${split[split.length - 1]}`;
  });

  function onclick(e: MouseEvent) {
    if (process.loadSave?.folder) return;

    process.updateSelection(e, thisPath);

    if (process.loadSave?.isSave) {
      process.saveName.set(file.name);
    }
  }

  function ondblclick() {
    if (process.loadSave) return;

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
      <img src={shortcut ? getIconPath(shortcut.icon) : icon} alt="" />
      {#if shortcut}
        <span class="icon-arrow-up-right"></span>
      {/if}
    </div>
    <div class="segment name">{shortcut?.name || file.name}</div>
    <div class="segment type">{shortcut ? "Shortcut" : mime}</div>
    <div class="segment size">{shortcut ? "-" : formatBytes(file.size)}</div>
    <div class="segment modified">{shortcut ? "-" : date}</div>
  </button>
{/if}
