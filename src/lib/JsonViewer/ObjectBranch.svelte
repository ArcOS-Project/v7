<script lang="ts">
  import JsonViewer from "$lib/JsonViewer.svelte";

  let { key, value }: { key: string; value: object } = $props();
</script>

<details>
  <summary><b class="key">{key}</b>: <span class="complex-datatype">Object</span> {"{...}"}</summary>

  <JsonViewer data={value} />
</details>
