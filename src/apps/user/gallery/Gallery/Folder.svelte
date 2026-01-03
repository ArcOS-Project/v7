<script lang="ts">
    import type { GalleryRuntime } from "../runtime";
    import type { ReadableStore } from "$ts/writable";

    let { process, folder, cur }: { process: GalleryRuntime, folder: string, cur:ReadableStore<string> } = $props();
</script>

<button class="folder" class:selected={$cur === folder} onclick={() => process.openFolder(folder)}>
    {process.truncateName(folder)}
</button>