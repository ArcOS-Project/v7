<script lang="ts">
  import { getDirectoryName } from "$ts/fs/util";
  import { Plural } from "$ts/util";
  import type { FileManagerRuntime } from "../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { selection, contents, path } = process;

  let dirName = $state("");

  $effect(() => {
    const sub = path.subscribe((v) => {
      dirName = getDirectoryName(v);
    });
  });
</script>

<div class="bottom">
  {#if $contents}
    {#if $selection.length}
      Selecting {$selection.length} of
    {/if}

    {$contents.dirs.length + $contents.files.length}
    {Plural("item", $contents.dirs.length + $contents.files.length)} in {dirName}
  {/if}
</div>
