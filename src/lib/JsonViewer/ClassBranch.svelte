<script lang="ts">
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value }: { key: string; value: any } = $props();

  let open = $derived(false);
</script>

<details bind:open>
  <summary><b class="key">{key}</b>: <span class="complex-datatype">Class {key} {"{...}"}</span></summary>

  {#if open}
    {#each Object.getOwnPropertyNames(value) as item, i}
      <JsonViewerRow key={item} value={value[item]} />
    {/each}
  {/if}
</details>
