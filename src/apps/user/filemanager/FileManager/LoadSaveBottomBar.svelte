<script lang="ts">
  import { getDirectoryName, getDriveLetter } from "$ts/fs/util";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";
  import { Plural } from "$ts/util";

  const { process }: { process: FileManagerRuntime } = $props();
  const { saveName, path, contents, selection } = process;

  let dirName = $state("");
  let driveLetter = $state<string>();
  let driveLabel = $state<string>();

  onMount(() => {
    path.subscribe((v) => {
      dirName = getDirectoryName(v);
      driveLetter = getDriveLetter(v, false);

      const driveIdentifier = getDriveLetter(v, true);

      if (driveIdentifier) {
        const drive = process.fs.getDriveByLetter(
          driveIdentifier.slice(0, -1),
          false
        );

        driveLabel = drive?.label || "";
      }
    });
  });
</script>

<div class="bottom save">
  {#if $contents}
    {#if process.loadSave?.isSave}
      <input type="text" bind:value={$saveName} />
    {:else}
      {$contents.dirs.length + $contents.files.length}
      {Plural("item", $contents.dirs.length + $contents.files.length)} in {dirName ||
        driveLetter ||
        driveLabel}
    {/if}
  {/if}
  <div class="actions">
    <button onclick={() => process.closeWindow()}>Cancel</button>
    <button
      onclick={() => process.confirmLoadSave()}
      disabled={process.loadSave?.isSave
        ? !$saveName
        : process.loadSave?.multiple
          ? !$selection.length
          : $selection.length !== 1}
    >
      {process.loadSave?.isSave ? "Save" : "Open"}
    </button>
  </div>
</div>
