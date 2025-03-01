<script lang="ts">
  import { getDirectoryName, getDriveLetter } from "$ts/fs/util";
  import { Plural } from "$ts/util";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { selection, contents, path } = process;

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

<div class="bottom">
  {#if $contents}
    {#if $selection.length}
      Selecting {$selection.length} of
    {/if}

    {$contents.dirs.length + $contents.files.length}
    {Plural("item", $contents.dirs.length + $contents.files.length)} in {dirName ||
      driveLetter ||
      driveLabel}
  {/if}
  <div class="view-toggle">
    <button class="lucide icon-grid-2x2" aria-label="Grid view"></button>
    <button class="lucide icon-list" aria-label="List view"></button>
  </div>
</div>
