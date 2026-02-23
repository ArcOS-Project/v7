<script lang="ts">
  import type { IFilesystemDrive } from "$interfaces/fs";
  import { Fs } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { getDriveLetter, getItemNameFromPath } from "$ts/util/fs";
  import type { FsProxyInfo } from "$types/fs";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";
  import { DriveIcons } from "../../store";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path, virtual } = process;

  let manualPath = $state<string>();
  let isManuallyEntering = $state<boolean>(false);
  let driveLetter = $state<string | undefined>();
  let driveLabel = $state<string>("");
  let drive = $state<IFilesystemDrive>();
  let name = $state<string>("");
  let proxy = $state<FsProxyInfo | undefined>();

  onMount(() => {
    const sub = path.subscribe((v) => {
      driveLetter = getDriveLetter(v, false);

      const driveIdentifier = getDriveLetter(v, true);

      if (driveIdentifier) {
        try {
          drive = Fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        } catch {}
      }

      proxy = Fs.tryGetProxyInfo(v, true);
      name = getItemNameFromPath(v);
    });

    return () => sub();
  });

  function onkeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      isManuallyEntering = false;
      process.navigate(manualPath || $path);
    }
  }

  function doManualEntry() {
    if (isManuallyEntering) return;

    isManuallyEntering = true;
    manualPath = $path;
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="path"
  class:read-only={drive?.READONLY}
  class:manual-entry={isManuallyEntering}
  use:contextMenu={[
    [
      {
        caption: "Copy path",
        icon: "copy",
        action: () => navigator.clipboard.writeText($path),
      },
      {
        caption: "Edit path...",
        icon: "pencil",
        action: () => doManualEntry(),
        disabled: () => !!isManuallyEntering,
      },
    ],
    process,
  ]}
  ondblclick={doManualEntry}
>
  {#if !isManuallyEntering}
    <div class="pill">
      <span class="lucide icon-{$virtual?.icon || DriveIcons[drive?.IDENTIFIES_AS || ''] || 'hard-drive'}"></span>
      <span>{$virtual ? $virtual.name : driveLetter || driveLabel}</span>
    </div>
    {#if name && !$virtual}
      <div class="current-dir">
        <img src={process.getIconCached(proxy ? "DefaultIcon" : "FolderIcon")} alt="" />
        <span>
          {#if proxy}
            {proxy.displayName}
          {:else}
            {name}
          {/if}
        </span>
      </div>
    {/if}
    {#if drive?.READONLY}
      <div class="pill readonly-notice">
        <span class="lucide icon-pencil-off"></span>
        <span>Read-only</span>
      </div>
    {/if}
  {:else}
    <img src={process.getIconCached("FolderIcon")} alt="" />
    <!-- svelte-ignore a11y_autofocus -->
    <input type="text" {onkeydown} onblur={() => (isManuallyEntering = false)} bind:value={manualPath} autofocus />
  {/if}
</div>
