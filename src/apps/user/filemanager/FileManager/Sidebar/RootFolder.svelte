<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import type { FileManagerRuntime } from "../../runtime";

  const {
    process,
    folder,
  }: { process: FileManagerRuntime; folder: FolderEntry } = $props();

  const { path } = process;
</script>

<button
  class="folder"
  onclick={() => process.navigate(`U:/${folder.name}`)}
  class:selected={$path.startsWith(`U:/${folder.name}`)}
>
  <img src={FolderIcon} alt="" />
  <span>{folder.name}</span>
</button>
