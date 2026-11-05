<script lang="ts">
  import type { ReadableStore } from "$types/shared/writable";
  import JsonViewerRow from "./JsonViewerRow.svelte";

  let { key, value }: { key: string; value: Function } = $props();
  let valueAsStore = $derived(value as ReadableStore<any>);
  let open = $state<boolean>(false);
</script>

{#if (value as any).__STORE__}
  <details bind:open>
    <summary><b class="key">{key}</b>: <span class="complex-datatype">ReadableStore {"{...}"}</span></summary>

    {#if open}
      <JsonViewerRow key="$value" value={valueAsStore()} />
    {/if}
  </details>
{:else}
  <b class="key" class:empty={key.startsWith("__")}>{key}</b>: <i>f()</i>
{/if}
