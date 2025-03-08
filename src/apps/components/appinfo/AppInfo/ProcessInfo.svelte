<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";

  const { appId, process }: { appId: string; process: AppInfoRuntime } = $props();

  let pid = $state(-1);
  let count = $state(0);

  async function update() {
    const pids = process.handler.renderer?.getAppInstances(appId).map((p) => p.pid);

    count = pids?.length || 0;
    pid = pids?.length ? pids[0] : -1;
  }

  onMount(() => {
    const sub = process.handler.store.subscribe(update);

    return () => sub();
  });
</script>

<InfoBlock className="process-info">
  <InfoRow>
    <Segment title="Processes">
      {count} instance(s)
    </Segment>
    <Segment title="First PID">
      {pid < 0 ? "None" : pid}
    </Segment>
    <button class="processes" onclick={() => process.notImplemented("Process Manager")}>Processes</button>
  </InfoRow>
</InfoBlock>
