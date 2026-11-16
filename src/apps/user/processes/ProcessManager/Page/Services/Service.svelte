<script lang="ts">
  import type { IProcessManagerRuntime } from "$interfaces/runtimes/IProcessManagerRuntime";
  import Icon from "$lib/Icon.svelte";
  import type { Service } from "$types/services/service";

  const { process, service, id }: { process: IProcessManagerRuntime; service: Service; id: string } = $props();
  const { selected } = process;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<tr onclick={() => ($selected = `svc#${id}`)} class:selected={$selected === `svc#${id}`}>
  <td class="name">
    <div>
      <Icon icon="ComponentIcon" />
      <span>{service.name}</span>
    </div>
  </td>
  <td class="description">{service.description}</td>
  <td class="pid">{service.pid || "-"}</td>
  <td class="status">{service.pid ? "Running" : "Stopped"}</td>
</tr>
