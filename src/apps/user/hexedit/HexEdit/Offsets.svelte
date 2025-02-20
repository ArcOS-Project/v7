<script lang="ts">
  import { decimalToHex } from "$ts/util";
  import type { HexEditRuntime } from "../runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { offsets } = process;
</script>

<div class="offsets">
  {#each $offsets as offset, i}
    <button class="offset">
      {decimalToHex(offset, 8)}
    </button>
  {/each}
</div>
