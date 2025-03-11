<script lang="ts">
  import { Store } from "$ts/writable";
  import type { ReplaceRuntime } from "./runtime";

  let search = Store<string>();
  let replace = Store<string>();

  const { process }: { process: ReplaceRuntime } = $props();
</script>

<div class="top">
  <div class="row">
    <p>Replace...</p>
    <input type="text" placeholder="Windows" bind:value={$search} />
  </div>
  <div class="row">
    <p>With...</p>
    <input type="text" placeholder="ArcOS" bind:value={$replace} />
  </div>
</div>

<div class="bottom">
  <button class="close" onclick={() => process.closeWindow()}>Close</button>
  <button disabled={!$search || !$replace} onclick={() => process.replaceOnce($search, $replace)}>Once</button>
  <button class="suggested" disabled={!$search || !$replace} onclick={() => process.replaceAll($search, $replace)}>All</button>
</div>
