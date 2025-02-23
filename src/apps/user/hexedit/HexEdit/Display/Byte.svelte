<script lang="ts">
  import { decimalToHex } from "$ts/util";
  import type { HexEditRuntime } from "../../runtime";

  let {
    byte,
    index,
    original,
    process,
  }: {
    byte: number;
    index: number;
    original: Uint8Array | undefined;
    process: HexEditRuntime;
  } = $props();

  const { editorInputs } = process;

  const value = $state<string>(decimalToHex(byte));
  let decimal = $state<number | undefined>();
  let className = $state<string>(process.getByteClass(byte));
</script>

<button
  class:changed={decimal !== original?.[index]}
  class={className}
  bind:this={$editorInputs[index]}
  onmouseenter={() => process.activeByte.set(index)}
  >{value}
</button>
