<script lang="ts">
  import type { EditRowRuntime } from "$apps/user/hexedit/editrow/runtime";
  import { MessageBox } from "$ts/dialog";
  import { decimalToHex } from "$ts/util";
  import { Store, type ReadableStore } from "$ts/writable";
  import { onMount } from "svelte";

  const {
    byte,
    index,
    view,
    output,
    process,
  }: {
    byte: number;
    index: number;
    view: ReadableStore<Uint8Array>;
    output: ReadableStore<Uint8Array>;
    process: EditRowRuntime;
  } = $props();
  const { editorInputs } = process;
  const value = Store<string>(decimalToHex(byte));

  let decimal = $state<number | undefined>();
  let className = $state<string>(process.getByteClass(byte));
  let invalid = $state<boolean>(false);

  onMount(() => {
    value.subscribe((v) => {
      if (!v) return;

      decimal = v.length === 2 ? Number(`0x${v}`) : undefined;
      className = process.getByteClass(decimal ?? byte);
      invalid = false;

      if (v.length === 2) {
        $editorInputs[index]?.blur();

        if (v.match(/[a-fA-F0-9]{2}/g)) {
          if (decimal !== $output[index]) $view[index] = decimal ?? byte;

          let nextInput = $editorInputs[index + 1];

          if (!nextInput) return;

          nextInput.focus();
          nextInput.select();
        } else {
          invalid = true;
          MessageBox(
            {
              title: "Invalid byte",
              message: `The byte you entered at offset ${index} is invalid, expected a hex value (0-9 A-F) but got '${v}'. You have to change this byte before being able to save the file you're working on.`,
              image: "ErrorIcon",
              sound: "arcos.dialog.error",
              buttons: [
                {
                  caption: "Reset this byte",
                  action: () => {
                    if (!$output?.[index]) return;

                    $value = decimalToHex($output?.[index]);
                  },
                },
                { caption: "Okay", action: () => {}, suggested: true },
              ],
            },
            process.parentPid,
            true
          );
        }
      }
    });
  });
</script>

<input
  type="text"
  bind:value={$value}
  bind:this={$editorInputs[index]}
  class={className}
  class:changed={$output[index] !== $view[index]}
  class:invalid
/>
