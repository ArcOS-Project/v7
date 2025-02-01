<script lang="ts">
  import { Sleep } from "$ts/sleep";
  import type { AppInfoRuntime } from "../runtime";
  import InfoBlock from "./InfoBlock.svelte";
  import InfoRow from "./InfoBlock/InfoRow.svelte";
  import Segment from "./InfoBlock/InfoRow/Segment.svelte";

  const { appId, process }: { appId: string; process: AppInfoRuntime } =
    $props();

  let pid = $state(-1);
  let count = $state(0);

  async function update() {
    await Sleep(300);
    const pids = process.handler.renderer
      ?.getAppInstances(appId)
      .map((p) => p.pid);

    count = pids?.length || 0;
    pid = pids?.length ? pids[0] : -1;
  }

  $effect(() => {
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
    <button class="processes">Processes</button>
  </InfoRow>
</InfoBlock>
