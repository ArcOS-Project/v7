<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import type { ProcessManagerRuntime } from "../../runtime";
  import Service from "./Services/Service.svelte";

  const { process }: { process: ProcessManagerRuntime } = $props();
  const { Services } = process.host;
  const { selected } = process;

  let serviceId = $state<string>("");

  selected.subscribe((v) => {
    serviceId = v.replace("svc#", "");
  });
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

<ActionBar>
  {#snippet leftContent()}
    <ActionSubtle text="{$Services.size} services" />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!$selected} onclick={() => process.serviceInfoFor(serviceId)}>Service info</ActionButton>
    <ActionSeparator />
    <ActionButton
      className="start"
      disabled={!$selected || !!$Services.get(serviceId)?.pid}
      onclick={() => process.startService(serviceId)}
    >
      Start
    </ActionButton>
    <ActionButton
      className="stop"
      disabled={!$selected || !$Services.get(serviceId)?.pid}
      onclick={() => process.stopService(serviceId)}
    >
      Stop
    </ActionButton>
    <ActionButton className="restart" disabled={!$selected} onclick={() => process.restartService(serviceId)}>
      Restart
    </ActionButton>
    {#if process.app.data.overlay}
      <ActionSeparator />
      <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
    {/if}
  {/snippet}
</ActionBar>
