<script lang="ts">
  import type { ReadableStore } from "$types/shared/writable";
  import js_beautify from "js-beautify";
  import StoreBranch from "./StoreBranch.svelte";
  import PropertyKey from "./PropertyKey.svelte";

  let { key, value, expand = false }: { key: string; value: Function; expand?: boolean } = $props();
  let valueAsStore = $derived(value as ReadableStore<any>);
  let showStringified = $state<boolean>(false);
</script>

{#if (value as any).__STORE__}
  <StoreBranch {key} value={valueAsStore} {expand} />
{:else}
  <PropertyKey {key} />
  <i>
    {#if showStringified}
      <span class="function-body">
        <button class="link" onclick={() => (showStringified = false)}>&lt;&lt;</button>
        {js_beautify(value.toString())}
      </span>
    {:else if key === "constructor"}
      ctor()
    {:else}
      <button class="link" onclick={() => (showStringified = true)} title="Show body">f()</button>
    {/if}
  </i>
{/if}
