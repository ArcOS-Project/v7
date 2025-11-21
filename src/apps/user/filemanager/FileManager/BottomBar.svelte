<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import { Plural } from "$ts/util";
  import { getDriveLetter, getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";
  import { Fs } from "$ts/env";

  const { process }: { process: FileManagerRuntime } = $props();
  const { contents, path, userPreferences, notice, showNotice, virtual } = process;

  let dirName = $state("");
  let driveLetter = $state<string>();
  let driveLabel = $state<string>();

  onMount(() => {
    contents.subscribe((v) => {
      dirName = getItemNameFromPath($path);
      driveLetter = getDriveLetter($path, false);

      const driveIdentifier = getDriveLetter($path, true);

      if (driveIdentifier) {
        try {
          const drive = Fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        } catch {}
      }
    });
  });

  function thumbnails() {
    process.userPreferences.update((v) => {
      v.appPreferences.fileManager.grid = false;
      v.appPreferences.fileManager.compact = false;
      v.appPreferences.fileManager.thumbnails = true;
      return v;
    });
  }

  function grid() {
    process.userPreferences.update((v) => {
      v.appPreferences.fileManager.grid = true;
      v.appPreferences.fileManager.compact = false;
      v.appPreferences.fileManager.thumbnails = false;
      return v;
    });
  }

  function list() {
    process.userPreferences.update((v) => {
      v.appPreferences.fileManager.grid = false;
      v.appPreferences.fileManager.compact = false;
      v.appPreferences.fileManager.thumbnails = false;
      return v;
    });
  }
</script>

<div class="bottom">
  <div class="stat">
    {#if $contents || $virtual}
      {#if !$virtual}
        {$contents!.dirs.length + $contents!.files.length}
        {Plural("item", $contents!.dirs.length + $contents!.files.length)} in {dirName || driveLetter || driveLabel}
      {:else}
        in {$virtual.name}
      {/if}
    {:else}
      <Spinner height={16} />
    {/if}
  </div>
  {#if $showNotice && $notice}
    <div class="notice {$notice.className || ''}" title={$notice.text}>
      <span class="lucide icon-{$notice.icon}"></span>
      <span>{$notice.text}</span>
    </div>
  {/if}
  <div class="view-toggle">
    <button
      class="lucide icon-file-image"
      aria-label="Thumbnail view"
      class:suggested={$userPreferences.appPreferences.fileManager!.thumbnails}
      onclick={thumbnails}
      disabled={!!$virtual}
      title="Thumbnail view"
    ></button>
    <button
      class="lucide icon-columns-3"
      aria-label="Grid view"
      class:suggested={$userPreferences.appPreferences.fileManager!.grid}
      onclick={grid}
      disabled={!!$virtual}
      title="Compact view"
    ></button>
    <button
      class="lucide icon-list"
      aria-label="List view"
      class:suggested={!$userPreferences.appPreferences.fileManager!.grid &&
        !$userPreferences.appPreferences.fileManager!.thumbnails}
      onclick={list}
      disabled={!!$virtual}
      title="List view"
    ></button>
  </div>
</div>
