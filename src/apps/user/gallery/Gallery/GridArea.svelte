<script lang="ts">
    import type { FileEntry } from "$types/fs";
    import type { ReadableStore } from "$ts/writable";
    import Grid from "./Grid.svelte";
    let { selectedFile, folder, images }: { selectedFile: ReadableStore<string>, folder: ReadableStore<string>, images: ReadableStore<Array<FileEntry>> } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="main" onclick={() => selectedFile.set("")}>
    <p class="title">
        {$folder}
        <span class="graytext">({$images.length})</span>
    </p>
    <div class="gridarea">
        {#each $images as img}
            <Grid {selectedFile} file={img}/>
        {/each}
    </div>
</div>