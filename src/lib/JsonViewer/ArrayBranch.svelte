<script lang="ts">
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value }: { key: string; value: any[] } = $props();

  const ARRAY_PREVIEW = "[...]";
  const OBJECT_PREVIEW = "{...}";

  let preview = $derived(`[${value.map(serializePreviewItem).slice(0, 5).join(", ")}${value.length > 5 ? ", ..." : ""}]`);

  function serializePreviewItem(item: any) {
    if (Array.isArray(item)) {
      return ARRAY_PREVIEW;
    } else if (typeof item === "object") {
      return OBJECT_PREVIEW;
    } else if (typeof item === "string") {
      return `"${item}"`;
    } else {
      return `${item}`;
    }
  }
</script>

<details>
  <summary><b class="key">{key}</b>: <span class="complex-datatype">Array({value.length}) {preview}</span></summary>

  {#if value.length}
    {#each value as item, i}
      <JsonViewerRow key={i.toString()} value={item} />
    {/each}
  {:else}
    <p class="empty">(empty)</p>
  {/if}
</details>
