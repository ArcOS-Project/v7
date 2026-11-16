<script lang="ts">
  import ComplexDataTypeSummary from "./ComplexDataTypeSummary.svelte";
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value, expand = false }: { key: string; value: Map<any, any>; expand?: boolean } = $props();
  let open = $derived(expand);
</script>

<details bind:open>
  <ComplexDataTypeSummary {key} {value}>
    {#snippet ValueComponent()}
      Map({value.size}) [...]
    {/snippet}
  </ComplexDataTypeSummary>

  {#if open}
    {#if value.size}
      {#each [...value] as [mapKey, mapValue], i}
        <JsonViewerRow key={`["${mapKey}"]`} value={mapValue} />
      {/each}
    {:else}
      <p class="empty">(empty)</p>
    {/if}
  {/if}
</details>
