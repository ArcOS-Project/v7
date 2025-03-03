<script lang="ts">
  import { getDirectoryName } from "$ts/fs/util";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import { onMount } from "svelte";
  import type { MediaPlayerRuntime } from "../runtime";

  const {
    process,
    i,
    path,
  }: { process: MediaPlayerRuntime; i: number; path: string } = $props();
  const { queueIndex, queue, State } = process;

  let icon = $state<string>();
  let filename = $state<string>();

  onMount(() => {
    filename = getDirectoryName(path);
    icon =
      process.userDaemon?.getMimeIconByFilename(filename) || DefaultMimeIcon;
  });
</script>

{#if icon && filename}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="queue-item"
    ondblclick={() => queueIndex.set(i)}
    class:selected={$queueIndex === i}
    title={filename}
  >
    {#if $queueIndex === i && !$State.paused}
      <span class="lucide icon-play"></span>
    {:else}
      <img src={icon} alt="" />
    {/if}
    <span class="name">{filename}</span>
    <button
      class="lucide icon-x"
      aria-label="Remove from queue"
      onclick={() => {
        $queue.splice(i);
        $queue = $queue;
      }}
    ></button>
  </div>
{/if}
