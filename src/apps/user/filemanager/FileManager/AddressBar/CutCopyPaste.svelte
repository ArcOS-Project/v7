<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();

  const { cutList, copyList, selection } = process;
</script>

<div class="portion copy-paste">
  <button
    class="lucide icon-scissors"
    aria-label="Cut items"
    disabled={!$selection.length}
    class:activated={$cutList.length}
    onclick={() => process.setCutFiles()}
  ></button>
  <button
    class="lucide icon-copy"
    aria-label="Copy items"
    disabled={!$selection.length}
    class:activated={$copyList.length}
    onclick={() => process.setCopyFiles()}
  ></button>
  <button
    class="lucide icon-clipboard"
    aria-label="Paste items"
    disabled={!$copyList.length && !$cutList.length}
    onclick={() => process.pasteFiles()}
  ></button>
</div>
