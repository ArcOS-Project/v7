<script lang="ts">
  import { getDirectoryName, getDriveLetter } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path } = process;

  let driveLetter = $state<string | undefined>();
  let driveLabel = $state<string>("");
  let name = $state<string>("");

  $effect(() => {
    const sub = path.subscribe((v) => {
      driveLetter = getDriveLetter(v, false);

      const driveIdentifier = getDriveLetter(v, true);

      if (driveIdentifier) {
        const drive = process.fs.getDriveByLetter(
          driveIdentifier.slice(0, -1),
          false
        );

        driveLabel = drive?.label || "";
      }

      name = getDirectoryName(v);
    });

    return () => sub();
  });
</script>

<div class="path">
  {#if !name}
    <div class="pill">
      <span class="lucide icon-hard-drive"></span>
      <span>{driveLetter || driveLabel}</span>
    </div>
  {:else}
    <img src={FolderIcon} alt="" />
  {/if}
  <span>
    {name}
  </span>
</div>
