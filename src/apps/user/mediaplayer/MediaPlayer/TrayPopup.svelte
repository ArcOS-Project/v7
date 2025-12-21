<script lang="ts">
  import HtmlSpinner from "$lib/HtmlSpinner.svelte";
  import type { MediaPlayerRuntime } from "../runtime";
  import Bar from "./Bar.svelte";
  import Next from "./Controls/Next.svelte";
  import PlayPause from "./Controls/PlayPause.svelte";
  import Previous from "./Controls/Previous.svelte";
  import Time from "./Controls/Time.svelte";
  import CoverImage from "./CoverImage.svelte";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, queue, CurrentMediaMetadata, windowTitle, LoadingMetadata } = process;
</script>

<CoverImage {process}/>
<div class="file">
  {#if $LoadingMetadata || !$CurrentMediaMetadata?.title}
    <h1 class="title">
      <span>{$windowTitle.split("-")[0]}</span>
      <HtmlSpinner height={16} thickness={3} />
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
<div class="media-controls">
  <Previous {process} />
  <PlayPause {process} />
  <Next {process} />
</div>
<Bar {process} />
<div class="meta">
  <div class="index">
    {#if $queue.length}
      {$queueIndex + 1} / {$queue.length}
    {:else}
      No queue
    {/if}
  </div>
  <Time {process} />
</div>
