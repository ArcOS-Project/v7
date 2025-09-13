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
    <Segment title="Load time">
      {target._internalLoadTime?.toFixed(2) || 0}ms
    </Segment>
    <Segment title="System version">
      {target._internalSysVer}
    </Segment>
    <Segment title="Minimal assembly">
      {target._internalMinVer || "-"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Code Path">
      {target._internalOriginalPath}
    </Segment>
  </InfoRow>
</InfoBlock>
