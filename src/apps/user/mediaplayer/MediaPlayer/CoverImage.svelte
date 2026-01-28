<script lang="ts">
  import { onMount } from "svelte";
  import type { MediaPlayerRuntime } from "../runtime";
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import { Fs } from "$ts/env";

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
