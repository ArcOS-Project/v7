<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { ExitRuntime } from "./runtime";
  import { ExitActions } from "./store";

  const { process }: { process: ExitRuntime } = $props();
  const { selected } = process;

  let shiftKey = $state<boolean>(false);

  onMount(() => {
    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", keydown);
    document.removeEventListener("keyup", keyup);
  });

  function keydown(e: KeyboardEvent) {
    if (e.key.toLowerCase().includes("shift")) shiftKey = true;
  }

  function keyup(e: KeyboardEvent) {
    if (e.key.toLowerCase().includes("shift")) shiftKey = false;
  }
</script>

<div class="header">
  <h1>Exit ArcOS</h1>
  <p>What's your escape route?</p>
</div>

<div class="options">
  {#each Object.entries(ExitActions) as [id, action]}
    <button
      class="option"
      onclick={() => ($selected = id)}
      ondblclick={(e) => process.go(action, e.shiftKey)}
      class:selected={$selected == id}
    >
      <img src={process.getIconCached(action.icon)} alt="" class="icon" />
      <p>{shiftKey && action.alternateCaption ? action.alternateCaption : action.caption}</p>
    </button>
  {/each}
</div>
<div class="confirm">
  <button class="suggested" onclick={(e) => process.go(undefined, e.shiftKey)} disabled={!$selected || !ExitActions[$selected]}>
    Confirm
  </button>
  <button onclick={() => process.closeWindow()}>Cancel</button>
</div>
