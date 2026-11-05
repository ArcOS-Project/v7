<script lang="ts">
  import JsonViewer from "$lib/JsonViewer.svelte";

  let { value }: { value: object } = $props();
</script>

<details>
  <summary>Object</summary>

  <JsonViewer data={value} />
</details>
