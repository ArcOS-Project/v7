<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
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
  data-contextmenu="sidebar-folder"
  use:contextProps={[folder]}
>
  <span
    class="lucide icon-folder-closed"
    class:icon-folder-open={$path.startsWith(`U:/${folder.name}`)}
  ></span>
  <span>{folder.name}</span>
</button>
