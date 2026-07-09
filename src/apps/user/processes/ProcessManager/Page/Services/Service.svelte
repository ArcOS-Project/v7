<script lang="ts">
  import type { IProcessManagerRuntime } from "$interfaces/runtimes/IProcessManagerRuntime";
  import Icon from "$lib/Icon.svelte";
  import type { Service } from "$types/services/service";

  const { process, service, id }: { process: IProcessManagerRuntime; service: Service; id: string } = $props();
  const { selected } = process;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="row service" onclick={() => ($selected = `svc#${id}`)} class:selected={$selected === `svc#${id}`}>
  <div class="segment name">
    <Icon icon="ComponentIcon" />
    <span>{service.name}</span>
  </div>
  <div class="segment description">{service.description}</div>
  <div class="segment pid">{service.pid || "-"}</div>
  <div class="segment status">{service.pid ? "Running" : "Stopped"}</div>
</div>
