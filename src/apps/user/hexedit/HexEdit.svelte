<script lang="ts">
  import type { HexEditRuntime } from "./runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { view } = process;
</script>

{#if $view}
  {#each $view as item, i}
    <button title={`${i}`}>{item}</button>
  {/each}
{/if}
