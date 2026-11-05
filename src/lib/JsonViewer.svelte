<script lang="ts">
  import JsonViewerRow from "./JsonViewer/JsonViewerRow.svelte";

  let { data }: { data: object } = $props();
</script>

<div class="json-viewer">
  {#each Object.entries(data) as [key, value]}
    <JsonViewerRow {key} {value} />
  {/each}
</div>
