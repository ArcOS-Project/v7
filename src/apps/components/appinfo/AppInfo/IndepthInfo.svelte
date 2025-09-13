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
    <Segment title="Size">
      {Math.max(0, target.size?.w || 0) || "F"} x {Math.max(0, target.size?.h || 0) || "F"}
    </Segment>

    <Segment title="Minimal Size">
      {Math.max(0, target.minSize?.w || 0) || "F"} x {Math.max(0, target.minSize?.h || 0) || "F"}
    </Segment>

    <Segment title="Maximal Size">
      {Math.max(0, target.maxSize?.w || 0) || "F"} x {Math.max(0, target.maxSize?.h || 0) || "F"}
    </Segment>
    <Segment title="Controls" right>
      <div class="controls">
        <button class="minimize icon-chevron-down" class:disabled={!target?.controls?.minimize} aria-label="Minimize"></button>
        <button class="maximize icon-chevron-up" class:disabled={!target?.controls?.maximize} aria-label="Maximize"></button>
        <button class="close icon-x" class:disabled={!target?.controls?.close} aria-label="Close"></button>
      </div>
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Initial Position">
      {#if target?.position?.centered}
        Centered
      {:else if target?.position?.x || target.position?.y}
        {target?.position?.x}, {target?.position?.y}
      {:else}
        Corner of screen
      {/if}
    </Segment>
    <Segment title="Origin">
      {AppOrigins[target?.originId || "injected"]}
    </Segment>
    <Segment title="Core">
      {target?.core ? "Yes" : "No"}
    </Segment>
    <Segment title="Hidden">
      {target?.hidden ? "Yes" : "No"}
    </Segment>
  </InfoRow>
</InfoBlock>
