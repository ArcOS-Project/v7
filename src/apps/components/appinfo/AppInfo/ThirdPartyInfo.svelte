<script lang="ts">
  import type { IAppInfoRuntime } from "$interfaces/runtimes/IAppInfoRuntime";
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import type { App } from "$types/apps/app";

  const { target }: { target: App; process: IAppInfoRuntime } = $props();
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="%thirdPartyInfo.thirdParty%">%general.yes%</Segment>
    <Segment title="%thirdPartyInfo.signatures%">
      {target.fileSignatures ? Object.entries(target.fileSignatures).length : "%general.none%"}
    </Segment>
    <Segment title="%thirdPartyInfo.hasProcess%">
      {target.process ? "%general.yes%" : "%general.no%"}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="%thirdPartyInfo.workingDirectory%">
      {target.workingDirectory}
    </Segment>
    <Segment title="%thirdPartyInfo.entryPoint%">
      {target.entrypoint}
    </Segment>
  </InfoRow>
</InfoBlock>
