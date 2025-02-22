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
    <!-- {#key startIndex} -->
    <button class="offset {i + startIndex}">
      {decimalToHex(offset, 8)}
    </button>
    <!-- {/key} -->
  {/each}
</div>
