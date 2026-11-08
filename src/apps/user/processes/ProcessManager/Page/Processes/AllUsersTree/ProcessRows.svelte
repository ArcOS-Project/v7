<script lang="ts">
  import ProcessRows from "./ProcessRows.svelte";
  import Icon from "$lib/Icon.svelte";
  import type { SummarizedProcessInformation } from "$types/system/dispatch";
  import { ProcessStateIcons } from "$types/system/process";

  const { parentPid = undefined, processes }: { parentPid?: number; processes: SummarizedProcessInformation[] } = $props();

  let filtered = $derived(processes.filter((proc) => (!parentPid ? !proc.parentPid : proc.parentPid === parentPid)));
</script>

{#each filtered as process (process.pid)}
  <div class="row process">
    <div class="segment name">
      <Icon icon={process.appId ? `@app::${process.appId}` : "DefaultIcon"} />
      <span>{process.name}</span>
      <span class="lucide icon-{ProcessStateIcons[process.state]}"></span>
    </div>
    <div class="segment pid">
      <Icon icon="FlagIcon" className="flag" />
      <span>{process.pid}</span>
    </div>
    <div class="segment memory">-</div>
    <div class="segment app-id" title={process.appId}>{process.appId || "-"}</div>
  </div>
  <div class="indent">
    <ProcessRows {processes} parentPid={process.pid} />
  </div>
{/each}
