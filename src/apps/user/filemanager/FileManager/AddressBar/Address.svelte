<script lang="ts">
  import { getDirectoryName, getDriveLetter } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path } = process;

  let drive = $state<string | undefined>();
  let name = $state<string>("");

  $effect(() => {
    const sub = path.subscribe((v) => {
      drive = getDriveLetter(v, false);
      name = getDirectoryName(v);
    });

    return () => sub();
  });
</script>

<div class="path">
  {#if drive}
    <div class="pill">
      <span class="lucide icon-hard-drive"></span>
      <span>{drive}</span>
    </div>
  {:else}
    <img src={FolderIcon} alt="" />
  {/if}
  <span>
    {name}
  </span>
</div>
