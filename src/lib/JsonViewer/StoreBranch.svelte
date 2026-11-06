<script lang="ts">
  import type { ReadableStore } from "$types/shared/writable";
  import ComplexDataTypeSummary from "./ComplexDataTypeSummary.svelte";
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value, expand = false }: { key: string; value: ReadableStore<any>; expand?: boolean } = $props();
  let open = $state<boolean>(expand);
  let type = $derived(typeof $value);
</script>

<details bind:open>
  <ComplexDataTypeSummary {key} {value}>
    {#snippet ValueComponent()}
      ReadableStore&lt;{type}&gt; {"{...}"}
    {/snippet}
  </ComplexDataTypeSummary>

  {#if open}
    <JsonViewerRow key="$value" value={value()} />
  {/if}
</details>
