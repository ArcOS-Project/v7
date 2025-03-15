<script lang="ts">
  import type { MediaPlayerRuntime } from "../runtime";
  import Bar from "./Bar.svelte";
  import Next from "./Controls/Next.svelte";
  import PlayPause from "./Controls/PlayPause.svelte";
  import Previous from "./Controls/Previous.svelte";
  import Time from "./Controls/Time.svelte";
  import File from "./File.svelte";

  const { process }: { process: MediaPlayerRuntime } = $props();
  const { queueIndex, queue } = process;
</script>

<File {process} />
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
