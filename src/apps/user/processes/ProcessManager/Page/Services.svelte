<script lang="ts">
  import type { ServiceIdentifier } from "$interfaces/IServiceHost";
  import type { IProcessManagerRuntime } from "$interfaces/runtimes/IProcessManagerRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSeparator from "$lib/Window/ActionBar/ActionSeparator.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import Service from "./Services/Service.svelte";

  const { process }: { process: IProcessManagerRuntime } = $props();
  const { Services } = process.host;
  const { selected } = process;

  let serviceId = $state<ServiceIdentifier | undefined>(undefined);

  selected.subscribe((v) => {
    serviceId = v.replace("svc#", "") as ServiceIdentifier;
  });
</script>

<div class="top">
  <table>
    <thead>
      <tr>
        <th>Service Name</th>
        <th>Description</th>
        <th>PID</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {#each [...$Services] as [id, service] (id)}
        <Service {process} {id} {service} />
      {/each}
    </tbody>
  </table>
</div>

<ActionBar>
  {#snippet leftContent()}
    <ActionSubtle text="{$Services.size} services" />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!$selected} onclick={() => process.serviceInfoFor(serviceId!)}>Service info</ActionButton>
    <ActionSeparator />
    <ActionButton
      className="start"
      disabled={!$selected || !!$Services.get(serviceId!)?.pid}
      onclick={() => process.startService(serviceId!)}
    >
      Start
    </ActionButton>
    <ActionButton
      className="stop"
      disabled={!$selected || !$Services.get(serviceId!)?.pid}
      onclick={() => process.stopService(serviceId!)}
    >
      Stop
    </ActionButton>
    <ActionButton className="restart" disabled={!$selected} onclick={() => process.restartService(serviceId!)}>
      Restart
    </ActionButton>
    {#if process.app.data.overlay}
      <ActionSeparator />
      <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
    {/if}
  {/snippet}
</ActionBar>
