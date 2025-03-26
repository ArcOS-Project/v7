<script lang="ts">
  import Function from "./Calculator/Function.svelte";
  import Key from "./Calculator/Key.svelte";
  import type { CalculatorRuntime } from "./runtime";

  const { process }: { process: CalculatorRuntime } = $props();
  const { Value } = process;
</script>

<input type="text" class="display" readonly value={$Value} placeholder="0" />
<div class="keys">
  {#each process.keys as key}
    {#if !key[0]?.startsWith("%%")}
      <Key {key} {process} />
    {:else}
      <Function {key} {process} />
    {/if}
  {/each}
</div>
