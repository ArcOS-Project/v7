<script lang="ts">
  import { decimalToHex } from "$ts/util";
  import { Store } from "$ts/writable";
  import { onDestroy, onMount } from "svelte";
  import type { HexEditRuntime } from "../../runtime";
  import type { Unsubscriber } from "svelte/store";

  let {
    byte,
    index,
    original,
    process,
    rowIndex,
  }: {
    byte: number;
    index: number;
    original: Uint8Array | undefined;
    process: HexEditRuntime;
    rowIndex: number;
  } = $props();

  const value = Store<string>(decimalToHex(byte));
  let decimal = $state<number | undefined>();
  let className = $state<string>(process.getByteClass(byte));
  let unsub: Unsubscriber;

  onMount(() => {
    unsub = value.subscribe(async (v) => {
      if (!v) return;

      decimal = v.length === 2 ? Number(`0x${v}`) : undefined;
      className = process.getByteClass(decimal || 0);
    });
  });

  onDestroy(() => {
    unsub?.();
  });
</script>

<button
  class:changed={decimal !== original?.[index]}
  class={className}
  ondblclick={() => process.alterRow(rowIndex)}>{$value}</button
>
