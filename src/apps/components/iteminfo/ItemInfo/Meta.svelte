<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { ReadableStore } from "$ts/writable";
  import dayjs from "dayjs";
  import advancedFormat from "dayjs/plugin/advancedFormat";
  import { onMount } from "svelte";
  import type { ItemInfoRuntime } from "../runtime";
  import type { ItemInfo } from "../types";
  dayjs.extend(advancedFormat);

  const { info, process }: { info: ReadableStore<ItemInfo>; process: ItemInfoRuntime } = $props();

  let created = $state<string>();
  let modified = $state<string>();

  onMount(() => {
    created = dayjs($info.meta.created).format("MMM Do YYYY, HH:mm");
    modified = dayjs($info.meta.modified).format("MMM Do YYYY, HH:mm");
  });
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="%meta.sort%">
      {$info.name ? $info.meta.sort : "drive"}
    </Segment>
    <Segment title="%meta.type%">
      {$info.meta.mimetype || "-"}
    </Segment>
    <Segment title="%meta.size%" right>
      {$info.meta.size ? formatBytes($info.meta.size) : "-"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="%meta.created%">
      {created}
    </Segment>
    <Segment title="%meta.modified%">
      {modified}
    </Segment>
  </InfoRow>
</InfoBlock>
