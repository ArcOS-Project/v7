<script lang="ts">
  import ComplexDataTypeSummary from "./ComplexDataTypeSummary.svelte";
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value }: { key: string; value: any } = $props();

  let open = $derived(false);
</script>

<details bind:open>
  <ComplexDataTypeSummary {key} {value}>
    {#snippet ValueComponent()}
      Class {key} {"{...}"}
    {/snippet}
  </ComplexDataTypeSummary>

  {#if open}
    {#each Object.getOwnPropertyNames(value) as item, i}
      <JsonViewerRow key={item} value={value[item]} />
    {/each}
  {/if}
</details>
