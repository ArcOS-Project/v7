<script lang="ts">
  import { decimalToHex } from "$ts/util";
  import Display from "./HexEdit/Display.svelte";
  import Offsets from "./HexEdit/Offsets.svelte";
  import type { HexEditRuntime } from "./runtime";

  const { process }: { process: HexEditRuntime } = $props();
  const { offsets, hexRows, decoded } = process;
</script>

<div class="container">
  <Offsets {process} />
  <Display {process} />
  <div class="decoded">
    {#each $decoded as chars}
      <div>
        {#each chars as char}
          {char}
        {/each}
      </div>
    {/each}
  </div>
</div>
