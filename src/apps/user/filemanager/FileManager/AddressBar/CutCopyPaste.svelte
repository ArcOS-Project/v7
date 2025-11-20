<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();

  const { selection, drive } = process;
  const { cutList, copyList } = process.userDaemon!;
</script>

<div class="portion copy-paste">
  <button
    class="lucide icon-scissors"
    aria-label="Cut items"
    title="Cut items"
    disabled={!$selection.length || $drive?.READONLY}
    class:activated={$cutList.length}
    onclick={() => process.setCutFiles()}
  ></button>
  <button
    class="lucide icon-copy"
    aria-label="Copy items"
    title="Copy items"
    disabled={!$selection.length}
    class:activated={$copyList.length}
    onclick={() => process.setCopyFiles()}
  ></button>
  <button
    class="lucide icon-clipboard"
    aria-label="Paste items"
    title="Paste items"
    disabled={(!$copyList.length && !$cutList.length) || $drive?.READONLY}
    onclick={() => process.pasteFiles()}
  ></button>
</div>
