<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { ReadableStore } from "$ts/writable";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";

  const { info, process }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Full Path">
      {$info.location.fullPath}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Extension">
      {$info.location.extension ? "." + $info.location.extension : "-"}
    </Segment>
    <Segment title="Parent">
      {$info.location.parent || "-"}
    </Segment>
    <Segment title="Drive">
      {$info.location.drive || "-"}
    </Segment>
    <Segment title="Filesystem">
      {$info.location.driveFs || "GFS"}
    </Segment>
  </InfoRow>
</InfoBlock>
