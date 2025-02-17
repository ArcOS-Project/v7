<script lang="ts">
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
  <span class="lucide icon-folder-closed"></span>
  <span>{folder.name}</span>
</button>
