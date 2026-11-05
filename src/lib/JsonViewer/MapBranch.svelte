<script lang="ts">
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value }: { key: string; value: Map<any, any> } = $props();
  let open = $derived(false);
</script>

<details bind:open>
  <summary><b class="key">{key}</b>: <span class="complex-datatype">Map({value.size}) [...]</span></summary>

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
