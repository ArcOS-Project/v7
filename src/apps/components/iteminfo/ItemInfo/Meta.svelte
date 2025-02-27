<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { formatBytes } from "$ts/fs/util";
  import type { ReadableStore } from "$ts/writable";
  import dayjs from "dayjs";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";
  import advancedFormat from "dayjs/plugin/advancedFormat";
  import { onMount } from "svelte";
  dayjs.extend(advancedFormat);

  const {
    info,
    process,
  }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();

  let created = $state<string>();
  let modified = $state<string>();

  onMount(() => {
    created = dayjs($info.meta.created).format("MMM Do YYYY, HH:mm");
    modified = dayjs($info.meta.modified).format("MMM Do YYYY, HH:mm");
  });
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Sort">
      {$info.meta.sort}
    </Segment>
    <Segment title="Mimetype">
      {$info.meta.mimetype || "-"}
    </Segment>
    <Segment title="Size">
      {$info.meta.size ? formatBytes($info.meta.size) : "-"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Created">
      {created}
    </Segment>
    <Segment title="Modified">
      {modified}
    </Segment>
  </InfoRow>
</InfoBlock>
