<script lang="ts">
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value }: { key: string; value: any[] } = $props();
</script>

<details>
  <summary><b class="key">{key}</b>: <span class="complex-datatype">Array[{value.length}]</span></summary>

  {#if value.length}
    {#each value as item, i}
      <JsonViewerRow key={i.toString()} value={item} />
    {/each}
  {:else}
    <p class="empty">(empty)</p>
  {/if}
</details>
