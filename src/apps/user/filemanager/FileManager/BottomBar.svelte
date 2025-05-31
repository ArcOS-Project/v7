<script lang="ts">
  import { getItemNameFromPath, getDriveLetter } from "$ts/fs/util";
  import { Plural } from "$ts/util";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";
  import Spinner from "$lib/Spinner.svelte";

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
        const drive = process.fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

        driveLabel = drive?.label || "";
      }
    });
  });
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
      class="lucide icon-columns-3"
      aria-label="Grid view"
      class:suggested={$userPreferences.appPreferences.fileManager!.grid}
      onclick={() => ($userPreferences.appPreferences.fileManager!.grid = true)}
      disabled={!!$virtual}
    ></button>
    <button
      class="lucide icon-list"
      aria-label="List view"
      class:suggested={!$userPreferences.appPreferences.fileManager!.grid}
      onclick={() => ($userPreferences.appPreferences.fileManager!.grid = false)}
      disabled={!!$virtual}
    ></button>
  </div>
</div>
