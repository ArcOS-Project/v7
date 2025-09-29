<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { AppOrigins } from "$ts/apps/store";
  import type { App } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";

  const { target, process }: { target: App; process: AppInfoRuntime } = $props();
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="%indepthInfo.size%">
      {Math.max(0, target.size?.w || 0) || "F"} x {Math.max(0, target.size?.h || 0) || "F"}
    </Segment>

    <Segment title="%indepthInfo.minSize%">
      {Math.max(0, target.minSize?.w || 0) || "F"} x {Math.max(0, target.minSize?.h || 0) || "F"}
    </Segment>

    <Segment title="%indepthInfo.maxSize%">
      {Math.max(0, target.maxSize?.w || 0) || "F"} x {Math.max(0, target.maxSize?.h || 0) || "F"}
    </Segment>
    <Segment title="%indepthInfo.controls%" right>
      <div class="controls">
        <button class="minimize icon-chevron-down" class:disabled={!target?.controls?.minimize} aria-label="%general.minimize%"
        ></button>
        <button class="maximize icon-chevron-up" class:disabled={!target?.controls?.maximize} aria-label="%general.maximize%"
        ></button>
        <button class="close icon-x" class:disabled={!target?.controls?.close} aria-label="%general.close%"></button>
      </div>
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="%indepthInfo.initialPosition%">
      {#if target?.position?.centered}
        %indepthInfo.centered%
      {:else if target?.position?.x || target.position?.y}
        {target?.position?.x}, {target?.position?.y}
      {:else}
        %indepthInfo.cornerOfScreen%
      {/if}
    </Segment>
    <Segment title="%indepthInfo.origin%">
      {AppOrigins[target?.originId || "injected"]}
    </Segment>
    <Segment title="%indepthInfo.core%">
      {target?.core ? "%general.yes%" : "%general.no%"}
    </Segment>
    <Segment title="%indepthInfo.hidden%">
      {target?.hidden ? "%general.yes%" : "%general.no%"}
    </Segment>
  </InfoRow>
</InfoBlock>
