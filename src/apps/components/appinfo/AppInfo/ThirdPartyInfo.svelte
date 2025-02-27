<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { ThirdPartyApp } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";

  const {
    target,
    process,
  }: { target: ThirdPartyApp; process: AppInfoRuntime } = $props();
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Unsafe code">
      {target.unsafeCode ? "Yes" : "No"}
    </Segment>
    <Segment title="Signatures">
      {target.fileSignatures
        ? Object.entries(target.fileSignatures).length
        : "None"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Working directory">
      {target.workingDirectory}
    </Segment>
    <Segment title="Entry point">
      {target.entrypoint}
    </Segment>
  </InfoRow>
</InfoBlock>
