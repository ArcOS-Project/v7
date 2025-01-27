<script lang="ts">
  import { WaveKernel } from "$ts/kernel";
  import { ArcMode } from "$ts/metadata/mode";
  import { htmlspecialchars } from "$ts/util";
  import type { ReadableStore } from "$ts/writable";
  import { ShortLogLevelCaptions } from "$types/logging";
  import Spinner from "../../../lib/Spinner.svelte";

  const { loadingStatus }: { loadingStatus: ReadableStore<string> } = $props();

  let currentLogItem = $state("");

  $effect(() => {
    const kernel = WaveKernel.get();
    const sub = kernel.Logs.subscribe((v) => {
      const last = v[v.length - 1];

      currentLogItem = htmlspecialchars(
        `${ShortLogLevelCaptions[last.level]} ${last.source}%%br${last.message}`
      ).replace("%%br", "<br>");
    });

    return () => sub();
  });
</script>

<p class="loading">
  <Spinner height={24} />
  {#if ArcMode() === "development"}
    <span>{@html currentLogItem}</span>
  {:else}
    <span>{@html $loadingStatus}</span>
  {/if}
</p>
