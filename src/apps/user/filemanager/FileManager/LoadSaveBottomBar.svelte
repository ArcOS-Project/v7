<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { Fs } from "$ts/env";
  import { Plural } from "$ts/util";
  import { getDriveLetter, getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { saveName, path, contents, selection } = process;

  let dirName = $state("");
  let driveLetter = $state<string>();
  let driveLabel = $state<string>();

  onMount(() => {
    path.subscribe((v) => {
      dirName = getItemNameFromPath(v);
      driveLetter = getDriveLetter(v, false);

      const driveIdentifier = getDriveLetter(v, true);

      if (driveIdentifier) {
        try {
          const drive = Fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        } catch {}
      }
    });
  });
</script>

<ActionBar className="save">
  {#snippet leftContent()}
    {#if $contents}
      {#if process.loadSave?.isSave}
        <div class="save-name">
          <input type="text" bind:value={$saveName} />
          {#if process.loadSave?.extensions?.[0]}
            <span class="extension">{process.loadSave?.extensions?.[0]}</span>
          {/if}
        </div>
      {:else}
        <ActionSubtle
          text="{$contents.dirs.length + $contents.files.length} {Plural(
            'item',
            $contents.dirs.length + $contents.files.length
          )} in {dirName || driveLetter || driveLabel}"
        />
      {/if}
    {/if}
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton
      onclick={() => process.confirmLoadSave()}
      disabled={!process.loadSave?.folder
        ? process.loadSave?.isSave
          ? !$saveName
          : process.loadSave?.multiple
            ? !$selection.length
            : $selection.length !== 1
        : false}
      suggested
    >
      {process.loadSave?.isSave ? "Save" : "Open"}
    </ActionButton>
  {/snippet}
</ActionBar>
