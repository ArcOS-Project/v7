<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import dayjs from "dayjs";
  import type { ServiceInfoRuntime } from "./runtime";
  import Header from "./ServiceInfo/Header.svelte";

  const { process }: { process: ServiceInfoRuntime } = $props();
  const { service, serviceProcess } = process;
</script>

<Header {process} />
<InfoBlock>
  <InfoRow>
    <Segment title="Identifier">
      {process.serviceId}
    </Segment>
    <Segment title="Name">{$serviceProcess?.name || "-"}</Segment>
    <Segment title="Initial State">
      {$service?.initialState}
    </Segment>
    <Segment title="State">
      {$service?.pid ? "Running" : "Stopped"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Loaded at">{dayjs($service?.loadedAt).format("MMM D, HH:mm:ss")}</Segment>
    <Segment title="Changed at">{dayjs($service?.changedAt).format("MMM D, HH:mm:ss")}</Segment>
    <Segment title="PID">{$service?.pid || "-"}</Segment>
    <Segment title="Parent PID">{Daemon?.serviceHost?.pid || "-"}</Segment>
  </InfoRow>
</InfoBlock>

{#if $serviceProcess?.sourceUrl}
  <InfoBlock>
    <InfoRow>
      <Segment title="Source Path">{$serviceProcess?.sourceUrl}</Segment>
    </InfoRow>
  </InfoBlock>
{/if}

<div class="actions">
  <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
</div>
