<script lang="ts">
  import { AppOrigins } from "$ts/apps/store";
  import type { App } from "$types/app";
  import type { AppInfoRuntime } from "../runtime";
  import InfoBlock from "./InfoBlock.svelte";
  import InfoRow from "./InfoBlock/InfoRow.svelte";
  import Segment from "./InfoBlock/InfoRow/Segment.svelte";

  const { target, process }: { target: App; process: AppInfoRuntime } =
    $props();
</script>

<InfoBlock>
  <InfoRow>
    <Segment title="Size">
      {target.size.w || "FIT"}x{target.size.h || "FIT"}
    </Segment>

    <Segment title="Minimal Size">
      {target.minSize.w || "FIT"}x{target.minSize.h || "FIT"}
    </Segment>

    <Segment title="Maximal Size">
      {target.maxSize.w || "FIT"}x{target.maxSize.h || "FIT"}
    </Segment>
    <Segment title="Controls" right>
      <div class="controls">
        <button
          class="minimize icon-chevron-down"
          class:disabled={!target.controls.minimize}
          aria-label="Minimize"
        ></button>
        <button
          class="maximize icon-chevron-up"
          class:disabled={!target.controls.maximize}
          aria-label="Maximize"
        ></button>
        <button
          class="close icon-x"
          class:disabled={!target.controls.close}
          aria-label="Close"
        ></button>
      </div>
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Initial Position">
      {#if target.position.centered}
        Centered
      {:else}
        {target.position.x}, {target.position.y}
      {/if}
    </Segment>
    <Segment title="Origin">
      {AppOrigins[target.originId || "injected"]}
    </Segment>
    <Segment title="Core">
      {target.core ? "Yes" : "No"}
    </Segment>
    <Segment title="Hidden">
      {target.hidden ? "Yes" : "No"}
    </Segment>
  </InfoRow>
</InfoBlock>
