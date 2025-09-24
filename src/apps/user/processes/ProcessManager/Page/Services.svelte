<script lang="ts">
  import type { ProcessManagerRuntime } from "../../runtime";
  import Service from "./Services/Service.svelte";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { Services } = process.host;
  const { selected } = process;
</script>

<div class="top">
  <div class="row header service">
    <div class="segment name">Service Name</div>
    <div class="segment description">Description</div>
    <div class="segment pid">PID</div>
    <div class="segment status">Status</div>
  </div>
  {#each [...$Services] as [id, service] (id)}
    <Service {process} {id} {service} />
  {/each}
</div>
<div class="actions">
  <p class="running">{$Services.size} services</p>
  <div class="buttons">
    <button disabled={!$selected} onclick={() => process.serviceInfoFor($selected.replace("svc#", ""))}>Service info</button>
    <div class="sep"></div>
    <button class="start" disabled={!$selected || !!$Services.get($selected.replace("svc#", ""))?.pid} onclick={() => process.startService($selected.replace("svc#", ""))}>Start</button>
    <button class="stop" disabled={!$selected || !$Services.get($selected.replace("svc#", ""))?.pid} onclick={() => process.stopService($selected.replace("svc#", ""))}>Stop</button>
    <button class="restart" disabled={!$selected} onclick={() => process.restartService($selected.replace("svc#", ""))}>Restart</button>
  </div>
</div>
