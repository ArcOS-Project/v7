<script lang="ts">
  import { ExitRuntime } from "./runtime";
  import { ExitActions } from "./store";

  const { process }: { process: ExitRuntime } = $props();
  const { selected } = process;
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
      <img src={process.getIconCached(action.icon)} alt="" class="icon" />
      <p>{action.caption}</p>
    </button>
  {/each}
</div>
<div class="confirm">
  <button class="suggested" onclick={(e) => process.go(undefined, e.shiftKey)} disabled={!$selected || !ExitActions[$selected]}>
    %general.confirm%
  </button>
  <button onclick={() => process.closeWindow()}>%general.cancel%</button>
</div>
