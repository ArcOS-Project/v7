<script lang="ts">
  import { getDriveLetter, getItemNameFromPath } from "$ts/fs/util";
  import { Plural } from "$ts/util";
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
          const drive = process.fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        } catch {}
      }
    });
  });
</script>

<div class="bottom save">
  {#if $contents}
    {#if process.loadSave?.isSave}
      <div class="save-name">
        <input type="text" bind:value={$saveName} />
        {#if process.loadSave?.extensions?.[0]}
          <span class="extension">{process.loadSave?.extensions?.[0]}</span>
        {/if}
      </div>
    {:else}
      {$contents.dirs.length + $contents.files.length}
      {Plural("item", $contents.dirs.length + $contents.files.length)} in {dirName || driveLetter || driveLabel}
    {/if}
  {/if}
  <div class="actions">
    <button onclick={() => process.closeWindow()}>Cancel</button>
    <button
      onclick={() => process.confirmLoadSave()}
      disabled={!process.loadSave?.folder
        ? process.loadSave?.isSave
          ? !$saveName
          : process.loadSave?.multiple
            ? !$selection.length
            : $selection.length !== 1
        : false}
      class="suggested"
    >
      {process.loadSave?.isSave ? "Save" : "Open"}
    </button>
  </div>
</div>
