<script lang="ts">
  import { getItemNameFromPath } from "$ts/fs/util";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import { onMount } from "svelte";
  import type { MediaPlayerRuntime } from "../runtime";

  const { process, i, path }: { process: MediaPlayerRuntime; i: number; path: string } = $props();
  const { queueIndex, queue, State, Loaded } = process;

  let icon = $state<string>();
  let filename = $state<string>();

  onMount(() => {
    filename = getItemNameFromPath(path);
    icon = process.userDaemon?.getMimeIconByFilename(filename) || DefaultMimeIcon;
  });

  function playThis() {
    if (!$Loaded || !$State.duration) return;

    $queueIndex = i;
  }

  function removeThis() {
    queue.update((v) => {
      v.splice(i, 1);
      return v;
    });
    if (i <= $queueIndex && $queueIndex > 0) $queueIndex--;
  }
</script>

{#if icon && filename}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="queue-item" ondblclick={playThis} class:selected={$queueIndex === i} title={filename}>
    {#if $queueIndex === i && !$State.paused}
      <span class="lucide icon-play"></span>
    {:else}
      <img src={icon} alt="" />
    {/if}
    <span class="name">{filename}</span>
    <button
      class="lucide icon-x"
      aria-label="Remove from queue"
      title="Remove from queue"
      onclick={() => removeThis()}
      disabled={!$Loaded || !$State.duration}
    ></button>
  </div>
{/if}
