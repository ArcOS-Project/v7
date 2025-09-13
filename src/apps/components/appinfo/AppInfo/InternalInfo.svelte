<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { App } from "$types/app";
  import axios from "axios";
  import type { AppInfoRuntime } from "../runtime";

  const { process, target }: { process: AppInfoRuntime; target: App } = $props();

  let calculatedSize = $state<number>(-1);

  async function calculateSize() {
    if (!target._internalResolvedPath) return;

    try {
      const response = await axios.head(target._internalResolvedPath);
      calculatedSize = +(response.headers["content-length"] || response.headers["Content-Length"] || -1);

      console.log(response);
    } catch {
      // silently error
    }
  }
</script>

<InfoBlock className="internal-info">
  <InfoRow>
    <Segment title="Load time">
      {target._internalLoadTime?.toFixed(2) || 0}ms
    </Segment>
    <Segment title="Size">
      {#if calculatedSize >= 0}
        {formatBytes(calculatedSize)}
      {:else}
        <button class="link" onclick={calculateSize}>Calculate</button>
      {/if}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Code Path">
      {target._internalOriginalPath}
    </Segment>
  </InfoRow>
  <InfoRow>
    <Segment title="Resolved module URL">
      {target._internalResolvedPath}
    </Segment>
  </InfoRow>
</InfoBlock>
