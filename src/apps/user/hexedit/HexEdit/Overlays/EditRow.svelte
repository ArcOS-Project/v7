<script lang="ts">
  import { decimalToHex } from "$ts/util";
  import type { EditRowRuntime } from "../../editrow/runtime";
  import Byte from "./EditRow/Byte.svelte";

  const { process }: { process: EditRowRuntime } = $props();
  const { rows, view, output, offset } = process;
</script>

<div class="top">
  {#each $rows as [rowIndex, bytes]}
    {#if bytes}
      <div class="row" class:primary={rowIndex === $offset}>
        <div class="offset">{decimalToHex(rowIndex * 16, 8)}</div>
        <div class="bytes">
          {#each bytes as [byte, index]}
            <Byte {byte} {index} {process} {view} {output} />
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</div>
<div class="bottom">
  <button class="cancel" onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" onclick={() => process.writeBytes()}
    >Write bytes</button
  >
</div>
