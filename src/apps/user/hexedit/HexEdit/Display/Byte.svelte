<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import { decimalToHex } from "$ts/util";
  import { Store, type ReadableStore } from "$ts/writable";
  import { onMount } from "svelte";
  import type { HexEditRuntime } from "../../runtime";
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon } from "$ts/images/dialog";

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
  let className = $state<string>(process.getByteClass(byte));
  let invalid = $state<boolean>(false);

  onMount(() => {
    value.subscribe(async (v) => {
      if (!v) return;

      decimal = v.length === 2 ? Number(`0x${v}`) : undefined;
      className = process.getByteClass(decimal || 0);

      if (v.length === 2 && decimal !== original?.[index]) {
        invalid = false;
        $editorInputs[index]?.blur();

        if (v.match(/[a-fA-F0-9]{2}/g)) {
          let nextInput = $editorInputs[index + 1];

          if (!nextInput) return;

          disabled = true;

          await Sleep(50);

          nextInput.focus();
          nextInput.select();

          $view[index] = decimal ?? byte;
          byte = decimal ?? byte;

          disabled = false;
        } else {
          invalid = true;
          MessageBox(
            {
              title: "Invalid byte",
              message: `The byte you entered at offset ${index} is invalid, expected a hex value (0-9 A-F) but got '${v}'. You have to change this byte before being able to save the file you're working on.`,
              image: ErrorIcon,
              sound: "arcos.dialog.error",
              buttons: [
                {
                  caption: "Reset this byte",
                  action: () => {
                    if (!original?.[index]) return;

                    $value = decimalToHex(original?.[index]);
                  },
                },
                { caption: "Okay", action: () => {}, suggested: true },
              ],
            },
            process.pid,
            true
          );
        }
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
  class:invalid
  class={className}
  {onkeydown}
  {disabled}
/>
