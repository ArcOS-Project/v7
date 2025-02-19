<script lang="ts">
  import { sliceIntoChunks } from "$ts/util";
  import { onMount } from "svelte";
  import type { HexEditRuntime } from "./runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { view } = process;

  let offsetLength = $state<number>(0);
  let offsets = $state<number[]>([]);
  let hexRows = $state<number[][]>([]);
  let decoded = $state<string[][]>([]);

  onMount(() => {
    view.subscribe((v) => {
      if (!v) return;

      const array = Array.from(v);

      offsetLength = Math.ceil(v.length / 16);

      for (let i = 0; i < offsetLength; i++) {
        offsets.push(i * 16);
      }

      hexRows = sliceIntoChunks(array, 16);
      decoded = sliceIntoChunks(
        array.map((i) => String.fromCharCode(i)),
        16
      );
    });
  });

  function sanitizeForHexEditor(input: string) {
    return input.replace(/[^\x21-\x7E]/g, ".");
  }
</script>

<div class="container">
  <div class="offset">
    {#each offsets as offset}
      <div>{offset.toString(16).padStart(8, "0").toUpperCase()}</div>
    {/each}
  </div>
  <div class="hex">
    {#each hexRows as rows, i}
      <div>
        {#each rows as byte, i}
          <span>{byte.toString(16).padStart(2, "0").toUpperCase()}</span>
        {/each}
      </div>
    {/each}
  </div>
  <div class="decoded">
    {#each decoded as chars}
      <div>
        {#each chars as char}
          {sanitizeForHexEditor(char)}
        {/each}
      </div>
    {/each}
  </div>
</div>
