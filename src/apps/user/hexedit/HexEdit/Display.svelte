<script lang="ts">
  import type { HexEditRuntime } from "../runtime";
  import Byte from "./Display/Byte.svelte";

  const { process }: { process: HexEditRuntime } = $props();
  const { hexRows, view, editorInputs, original } = process;
</script>

<div class="hex-editor">
  {#each $hexRows as rows}
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
