<script lang="ts">
  import type { IExitRuntime } from "$interfaces/runtimes/IExitRuntime";
  import Icon from "$lib/Icon.svelte";
  import { onDestroy, onMount } from "svelte";
  import { ExitActions } from "./store";

  const { process }: { process: IExitRuntime } = $props();
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
    if (e?.key?.toLowerCase().includes("shift")) shiftKey = true;
  }

  function keyup(e: KeyboardEvent) {
    if (e?.key?.toLowerCase().includes("shift")) shiftKey = false;
  }
</script>

<div class="header">
  <h1>%header.title%</h1>
  <p>%header.message%</p>
</div>

<div class="options">
  {#each Object.entries(ExitActions) as [id, action]}
    <button
      class="option"
      onclick={() => ($selected = id)}
      ondblclick={(e) => process.go(action, e.shiftKey)}
      class:selected={$selected == id}
    >
      <Icon icon={action.icon} className="icon" />
      <p>{shiftKey && action.alternateCaption ? action.alternateCaption : action.caption}</p>
    </button>
  {/each}
</div>
<div class="confirm">
  <button class="suggested" onclick={(e) => process.go(undefined, e.shiftKey)} disabled={!$selected || !ExitActions[$selected]}>
    %general.confirm%
  </button>
  <button onclick={() => process.closeWindow()}>%general.cancel%</button>
</div>
