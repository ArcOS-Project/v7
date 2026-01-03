<script lang="ts">
    import placeholder from "./placeholder.png";

    import type { FileEntry } from "$types/fs";
    import type { ReadableStore } from "$ts/writable";
    import { formatBytes } from "$ts/util/fs";

    let { selectedFile, file }: { selectedFile: ReadableStore<string>, file: FileEntry } = $props();
</script>

<button class="file" class:selected={$selectedFile} onclick={(e) => {
    if (selectedFile.get() === file.name) {

    } else {
        e.stopPropagation(); 
        selectedFile.set(file.name);
    }
}}>
    <div class="preview">
        <img class="previewimage" src={placeholder} alt={file.name}>
    </div>
    <div class="info">
        <p class="filename">{file.name}</p>
        <p class="graytext">{formatBytes(file.size)} </p>
    </div>
</button>