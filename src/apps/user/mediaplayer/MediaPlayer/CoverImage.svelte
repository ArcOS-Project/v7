<script lang="ts">
  import type { IMediaPlayerRuntime } from "$interfaces/runtimes/IMediaPlayerRuntime";

  const { process }: { process: IMediaPlayerRuntime } = $props();
  const { CurrentMediaMetadata, LoadingMetadata, CurrentCoverUrl } = process;
</script>

<div class="cover-art">
  {#if $LoadingMetadata || !$CurrentCoverUrl}
    <span class="lucide icon-music-2"></span>
  {:else if $CurrentCoverUrl}
    <img src={$CurrentCoverUrl} alt="" class="cover-image" />
  {/if}
</div>
