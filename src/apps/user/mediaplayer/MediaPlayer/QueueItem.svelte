<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";
  import type { MediaPlayerRuntime } from "../runtime";
  import type { AudioFileMetadata } from "../types";

  const { process, i, path }: { process: MediaPlayerRuntime; i: number; path: string } = $props();
  const { queueIndex, queue, State, Loaded, MetadataConfiguration } = process;

  let icon = $state<string>();
  let filename = $state<string>();
  let metadata = $state<AudioFileMetadata|undefined>();

  onMount(() => {
    filename = getItemNameFromPath(path);
    const info = Daemon?.assoc?.getFileAssociation(filename);
    icon = info?.icon || process.getIconCached("DefaultMimeIcon");
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
    <span class="name">{$MetadataConfiguration[path]?.title || filename}</span>
    <button
      class="lucide icon-x"
      aria-label="Remove from queue"
      title="Remove from queue"
      onclick={() => removeThis()}
      disabled={!$Loaded || !$State.duration}
    ></button>
  </div>
{/if}
