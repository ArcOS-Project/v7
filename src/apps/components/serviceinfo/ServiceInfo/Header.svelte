<script lang="ts">
  import type { ServiceInfoRuntime } from "../runtime";

  const { process }: { process: ServiceInfoRuntime } = $props();
  const { service } = process;
</script>

<div class="header">
  <img src={process.getIconCached("ComponentIcon")} alt="" />
  <div class="info">
    <h1>{$service?.name}</h1>
    <p>{$service?.description}</p>
  </div>
  <button class:start={!$service?.pid} class:stop={$service?.pid} onclick={() => process.toggleRunningState()}
    >{$service?.pid ? "Stop" : "Start"}</button
  >
</div>
