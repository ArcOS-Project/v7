<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { getKMod } from "$ts/env";
  import { Sleep } from "$ts/sleep";
  import type { ProcessHandlerType } from "$types/kernel";
  import { onMount } from "svelte";
  import type { AppInfoRuntime } from "../runtime";

  const { appId, process }: { appId: string; process: AppInfoRuntime } = $props();

  const stack = getKMod<ProcessHandlerType>("stack");
  let pid = $state(-1);
  let count = $state(0);

  async function update() {
    await Sleep(10);
    const pids = stack.renderer?.getAppInstances(appId).map((p) => p.pid);

    count = pids?.length || 0;
    pid = pids?.length ? pids[0] : -1;
  }

  onMount(() => {
    const sub = stack.store.subscribe(update);

    return () => sub();
  });
</script>

<InfoBlock className="process-info">
  <InfoRow>
    <Segment title="%processInfo.processes%">
      %processInfo.instances({count})%
    </Segment>
    <Segment title="%processInfo.firstPid%">
      {pid < 0 ? "%general.none%" : pid}
    </Segment>
    <button class="processes" onclick={() => process.processManager()}>%processInfo.processes%</button>
  </InfoRow>
</InfoBlock>
