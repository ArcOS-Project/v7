<script lang="ts">
  import { onMount } from "svelte";
  import type { HexEditRuntime } from "../runtime";
  import Byte from "./Display/Byte.svelte";

  const {
    process,
    startIndex,
    endIndex,
  }: { process: HexEditRuntime; startIndex: number; endIndex: number } =
    $props();
  const { hexRows, view, editorInputs, original } = process;
</script>

<div class="hex-editor">
  {#each $hexRows.slice(startIndex, endIndex) as rows, rowIndex (startIndex + rowIndex)}
    <div class="hex-row">
      {#each rows as [byte, index]}
        <Byte
          {byte}
          {index}
          {view}
          {editorInputs}
          original={$original}
          {process}
        />
      {/each}
    </div>
  {/each}
</div>
