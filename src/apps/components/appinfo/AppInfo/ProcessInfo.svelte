<script lang="ts">
  import type { IProcessHandler } from "$interfaces/modules/IProcessHandler";
  import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { getKMod } from "$ts/env";
  import { Sleep } from "$ts/sleep";
  import { onMount } from "svelte";

  const { appId, process }: { appId: string; process: IAppInfoRuntime } = $props();

  const stack = getKMod<IProcessHandler>("stack");
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
