<script lang="ts">
  import ComplexDataTypeSummary from "./ComplexDataTypeSummary.svelte";
  import JsonViewerRow from "./JsonViewerRow.svelte";
  import PropertyKey from "./PropertyKey.svelte";

  let { key, value, expand = false }: { key: string; value: any[]; expand?: boolean } = $props();

  const ARRAY_PREVIEW = "[...]";
  const OBJECT_PREVIEW = "{...}";

  let preview = $derived(`[${value.map(serializePreviewItem).slice(0, 5).join(", ")}${value.length > 5 ? ", ..." : ""}]`);
  let open = $derived(!!expand);

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

<details bind:open>
  <ComplexDataTypeSummary {key} {value}>
    {#snippet ValueComponent()}
      Array({value.length}) {preview}
    {/snippet}
  </ComplexDataTypeSummary>

  {#if open}
    {#if value.length}
      {#each value as item, i}
        <JsonViewerRow key={i.toString()} value={item} />
      {/each}
    {:else}
      <p class="empty">(empty)</p>
    {/if}
  {/if}
</details>
