<script lang="ts">
  import type { ProcessManagerRuntime } from "../../runtime";

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
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="row service" onclick={() => ($selected = `svc#${id}`)} class:selected={$selected === `svc#${id}`}>
      <div class="segment name">
        <img src={process.getIconCached("ComponentIcon")} alt="" />
        <span>{service.name}</span>
      </div>
      <div class="segment description">{service.description}</div>
      <div class="segment pid">{service.pid || "-"}</div>
      <div class="segment status">{service.pid ? "Running" : "Stopped"}</div>
    </div>
  {/each}
</div>
<div class="actions">
  <p class="running">{$Services.size} services</p>
  <div class="buttons">
    <button disabled={!$selected}>Service info</button>
    <div class="sep"></div>
    <button class="start" disabled={!$selected || !!$Services.get($selected.replace("svc#", ""))?.pid}>Start</button>
    <button class="stop" disabled={!$selected || !$Services.get($selected.replace("svc#", ""))?.pid}>Stop</button>
    <button class="restart" disabled={!$selected}>Restart</button>
  </div>
</div>
