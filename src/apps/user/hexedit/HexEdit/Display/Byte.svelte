<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import { decimalToHex } from "$ts/util";
  import { Store, type ReadableStore } from "$ts/writable";
  import { onMount } from "svelte";
  import type { HexEditRuntime } from "../../runtime";

  let {
    byte,
    index,
    view,
    editorInputs,
    original,
    process,
  }: {
    byte: number;
    index: number;
    view: ReadableStore<Uint8Array>;
    editorInputs: ReadableStore<HTMLInputElement[]>;
    original: Uint8Array | undefined;
    process: HexEditRuntime;
  } = $props();

  const value = Store<string>(decimalToHex(byte));
  let decimal = $state<number | undefined>();
  let disabled = $state<boolean>(false);
  let className = $state<string>();

  onMount(() => {
    value.subscribe(async (v) => {
      decimal = v.length === 2 ? Number(`0x${v}`) : undefined;
      v ?? (className = process.getByteClass(v));

      if (v.length === 2) {
        const nextInput = $editorInputs[index + 1];

        if (!nextInput) return;

        disabled = true;

        await Sleep(50);

        nextInput.focus();
        nextInput.select();

        $view[index] = decimal ?? byte;
        byte = decimal ?? byte;

        disabled = false;
      }
    });
  });

  function onkeydown(e: KeyboardEvent) {
    if (e.key !== "Enter") return;

    $view[index] = decimal ?? byte;
    byte = decimal ?? byte;
  }
</script>

<input
  type="text"
  bind:value={$value}
  bind:this={$editorInputs[index]}
  class:changed={decimal !== original?.[index]}
  class={className}
  {onkeydown}
  {disabled}
/>
