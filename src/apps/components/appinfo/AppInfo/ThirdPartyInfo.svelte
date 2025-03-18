<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { App } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";

  const { target }: { target: App; process: AppInfoRuntime } = $props();
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Third-party">Yes</Segment>
    <Segment title="Signatures">
      {target.fileSignatures ? Object.entries(target.fileSignatures).length : "None"}
    </Segment>
    <Segment title="Has process">
      {target.process ? "Yes" : "No"}
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
