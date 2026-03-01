<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { Fs } from "$ts/env";
  import { Plural } from "$ts/util";
  import { getDriveLetter, getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";
  import ActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";

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
      v.appPreferences.fileManager.thumbnails = true;
      return v;
    });
  }

  function grid() {
    process.userPreferences.update((v) => {
      v.appPreferences.fileManager.grid = true;
      v.appPreferences.fileManager.thumbnails = false;
      return v;
    });
  }

  function list() {
    process.userPreferences.update((v) => {
      v.appPreferences.fileManager.grid = false;
      v.appPreferences.fileManager.thumbnails = false;
      return v;
    });
  }
</script>

<ActionBar>
  {#snippet leftContent()}
    {#if $contents || $virtual}
      {#if !$virtual}
        <ActionSubtle
          text="{$contents!.dirs.length + $contents!.files.length} {Plural(
            'item',
            $contents!.dirs.length + $contents!.files.length
          )} in {dirName || driveLetter || driveLabel}"
        />
      {:else}
        <ActionSubtle text="in {$virtual.name}" />
      {/if}
    {:else}
      <Spinner height={16} />
    {/if}
  {/snippet}
  {#snippet rightContent()}
    {#if $showNotice && $notice}
      <div class="notice {$notice.className || ''}" title={$notice.text}>
        <span class="lucide icon-{$notice.icon}"></span>
        <span>{$notice.text}</span>
      </div>
    {/if}
    <ActionGroup>
      <ActionIconButton
        icon="file-image"
        suggested={$userPreferences.appPreferences.fileManager!.thumbnails}
        onclick={thumbnails}
        disabled={!!$virtual}
        title="Thumbnail view"
      ></ActionIconButton>
      <ActionIconButton
        icon="columns-3"
        suggested={$userPreferences.appPreferences.fileManager!.grid}
        onclick={grid}
        disabled={!!$virtual}
        title="Compact view"
      ></ActionIconButton>
      <ActionIconButton
        icon="list"
        suggested={!$userPreferences.appPreferences.fileManager!.grid && !$userPreferences.appPreferences.fileManager!.thumbnails}
        onclick={list}
        disabled={!!$virtual}
        title="List view"
      ></ActionIconButton>
    </ActionGroup>
  {/snippet}
</ActionBar>
