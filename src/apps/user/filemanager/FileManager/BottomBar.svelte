<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionGroup from "$lib/Window/ActionBar/ActionGroup.svelte";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { Fs } from "$ts/env";
  import { Plural } from "$ts/util";
  import { getDriveLetter, getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";

  const { process }: { process: IFileManagerRuntime } = $props();
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
        suggested={$userPreferences.appPreferences.fileManager.viewMode === "thumbnail"}
        onclick={() => ($userPreferences.appPreferences.fileManager.viewMode = "thumbnail")}
        disabled={!!$virtual}
        title="Thumbnail view"
      ></ActionIconButton>
      <ActionIconButton
        icon="columns-3"
        suggested={$userPreferences.appPreferences.fileManager.viewMode === "grid"}
        onclick={() => ($userPreferences.appPreferences.fileManager.viewMode = "grid")}
        disabled={!!$virtual}
        title="Grid view"
      ></ActionIconButton>
      <ActionIconButton
        icon="list"
        suggested={$userPreferences.appPreferences.fileManager.viewMode === "list"}
        onclick={() => ($userPreferences.appPreferences.fileManager.viewMode = "list")}
        disabled={!!$virtual}
        title="List view"
      ></ActionIconButton>
    </ActionGroup>
  {/snippet}
</ActionBar>
