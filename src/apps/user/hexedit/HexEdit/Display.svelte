<script lang="ts">
  import type { HexEditRuntime } from "../runtime";
  import Byte from "./Display/Byte.svelte";

  const {
    process,
    startIndex,
    endIndex,
  }: { process: HexEditRuntime; startIndex: number; endIndex: number } =
    $props();
  const { hexRows, original } = process;
</script>

<div class="hex-editor">
  {#each $hexRows.slice(startIndex, endIndex) as row, rowIndex (startIndex + rowIndex)}
    <div class="hex-row">
      {#each row as [byte, index]}
        <Byte {byte} {index} original={$original} {process} />
      {/each}
    </div>
  {/each}
</div>
