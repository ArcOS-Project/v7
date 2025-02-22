<script lang="ts">
  import { decimalToHex } from "$ts/util";
  import type { HexEditRuntime } from "../runtime";

  const {
    process,
    startIndex,
    endIndex,
  }: { process: HexEditRuntime; startIndex: number; endIndex: number } =
    $props();
  const { offsets } = process;
</script>

<div class="offsets">
  {#each $offsets.slice(startIndex, endIndex) as offset, i}
    <button
      class="offset {i + startIndex} "
      onclick={() => process.alterRow(offset / 16)}
    >
      {decimalToHex(offset, 8)}
    </button>
  {/each}
</div>
