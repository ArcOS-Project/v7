<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { ItemInfoRuntime } from "../../runtime";

  const { process }: { process: ItemInfoRuntime } = $props();
  const { drive } = process;
</script>

{#if drive}
  <InfoBlock>
    <InfoRow>
      <Segment title="Busy">{drive.BUSY ? "Yes" : "No"}</Segment>
      <Segment title="Fixed">{drive.FIXED ? "Yes" : "No"}</Segment>
      <Segment title="Readonly">{drive.READONLY ? "Yes" : "No"}</Segment>
      <Segment title="Removable">{drive.REMOVABLE ? "Yes" : "No"}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Identifies As">{drive.IDENTIFIES_AS}</Segment>
      <Segment title="Letter">{drive.driveLetter || "-"}</Segment>
      <Segment title="Label">{drive.label || "-"}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Filesystem">{drive.FILESYSTEM_LONG} ({drive.FILESYSTEM_SHORT})</Segment>
      <Segment title="ID">{drive.uuid || "?"}</Segment>
    </InfoRow>
  </InfoBlock>
{/if}
