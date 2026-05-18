<script lang="ts">
  import { contextProps } from "$ts/ui/context/actions.svelte";
  import { UserPaths } from "$ts/user/store";
  import type { FolderEntry } from "$types/fs";
  import type { FileManagerRuntime } from "../../runtime";

  const { process, folder }: { process: FileManagerRuntime; folder: FolderEntry } = $props();

  const { path } = process;
</script>

<button
  class="folder"
  onclick={() => process.navigate(`${UserPaths.Home}/${folder.name}`)}
  class:selected={$path.startsWith(`${UserPaths.Home}/${folder.name}`)}
  data-contextmenu="sidebar-folder"
  use:contextProps={[folder]}
>
  <span class="lucide icon-folder-closed" class:icon-folder-open={$path.startsWith(`${UserPaths.Home}/${folder.name}`)}></span>
  <span>{folder.name}</span>
</button>
