<script lang="ts">
  import { Fs } from "$ts/env";
  import { onMount } from "svelte";
  import type { MediaPlayerRuntime } from "../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { CurrentMediaMetadata, LoadingMetadata, CurrentCoverUrl } = process;

  onMount(() => {
    CurrentMediaMetadata.subscribe(async (v) => {
      if (!v?.coverImagePath) return;

      $CurrentCoverUrl = await Fs.direct(v.coverImagePath);
    });
  });
</script>

<div class="cover-art">
  {#if $LoadingMetadata || !$CurrentCoverUrl}
    <span class="lucide icon-music-2"></span>
  {:else if $CurrentCoverUrl}
    <img src={$CurrentCoverUrl} alt="" class="cover-image" />
  {/if}
</div>
