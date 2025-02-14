<script lang="ts">
  import { clickMenu } from "$ts/ui/context/actions.svelte";
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="group">
  <button
    class="new-item"
    use:clickMenu={{
      process,
      options: async () => [
        { caption: "Folder", action: () => {} },
        { caption: "File", action: () => {} },
      ],
    }}
  >
    <span class="lucide icon-plus"></span>
    <span>New...</span>
  </button>
</div>
