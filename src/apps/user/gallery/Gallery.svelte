<script lang="ts">
    import Sidebar from "./Gallery/Sidebar.svelte";
    import GridArea from "./Gallery/GridArea.svelte";
    import type { GalleryRuntime } from "./runtime";

    const { process }: { process: GalleryRuntime } = $props();

</script>

<Sidebar {process} folders={process.folders} currentFolder={process.currentFolder} />
<GridArea selectedFile={process.selectedFile} folder={process.currentFolder} images={process.images}/>