<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { App } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";

  const { process, target }: { process: AppInfoRuntime; target: App } = $props();
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
