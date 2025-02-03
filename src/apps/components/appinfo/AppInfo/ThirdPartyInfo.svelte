<script lang="ts">
  import type { ThirdPartyApp } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";
  import InfoBlock from "./InfoBlock.svelte";
  import InfoRow from "./InfoBlock/InfoRow.svelte";
  import Segment from "./InfoBlock/InfoRow/Segment.svelte";

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
