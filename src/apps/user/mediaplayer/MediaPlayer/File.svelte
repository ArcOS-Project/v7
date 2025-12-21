<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import type { MediaPlayerRuntime } from "../runtime";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { windowTitle, windowIcon, CurrentMediaMetadata, LoadingMetadata } = process;
</script>

<div class="file">
  <img src={$windowIcon} alt="" />
  {#if $LoadingMetadata || !$CurrentMediaMetadata?.title}
    <h1 class="title">
      <span>{$windowTitle.split("-")[0]}</span>
      {#if $LoadingMetadata}
        <HtmlSpinner height={16} thickness={3} />
      {/if}
    </h1>
  {:else}
    <h1 class="title">
      {$CurrentMediaMetadata.title}
    </h1>
    {#if $CurrentMediaMetadata?.artist}
      <p class="author">
        By {$CurrentMediaMetadata?.artist}
      </p>
    {/if}
  {/if}
</div>
