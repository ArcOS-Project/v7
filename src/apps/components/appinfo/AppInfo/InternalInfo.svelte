<script lang="ts">
  import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { App } from "$types/apps/app";

  const { process, target }: { process: IAppInfoRuntime; target: App } = $props();
</script>

<InfoBlock className="internal-info">
  <InfoRow>
    <Segment title="%internalInfo.loadTime%">
      {target._internalLoadTime?.toFixed(2) || 0}ms
    </Segment>
    <Segment title="%internalInfo.systemVersion%">
      {target._internalSysVer}
    </Segment>
    <Segment title="%internalInfo.minimalAssembly%">
      {target._internalMinVer || "-"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="%internalInfo.codePath%">
      {target._internalOriginalPath}
    </Segment>
  </InfoRow>
</InfoBlock>
