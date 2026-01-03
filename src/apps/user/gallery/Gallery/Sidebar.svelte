<script lang="ts">
    import Folder from "./Folder.svelte";
    import type { GalleryRuntime } from "../runtime";
    import type { ReadableStore } from "$ts/writable";

    let { process, folders, currentFolder }: { process: GalleryRuntime, folders: Array<string>, currentFolder: ReadableStore<string> } = $props();
</script>

<div class="sidebar">
    {#each folders as f}
        <Folder {process} folder={f} cur={currentFolder} />
    {/each}
</div>