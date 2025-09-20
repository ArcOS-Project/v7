<script lang="ts">
  import type { ProcessManagerRuntime } from "$apps/user/processes/runtime";
  import type { Service } from "$types/service";

  const { process, service, id }: { process: ProcessManagerRuntime; service: Service; id: string } = $props();
  const { selected } = process;
</script>

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
