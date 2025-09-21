<script lang="ts">
  import type { IconEditorRuntime } from "../runtime";
  import IconDetails from "./IconGrid/IconDetails.svelte";

  const { process }: { process: IconEditorRuntime } = $props();
  const { selectedIcon, filtered } = process;
</script>

<div class="grid" class:selecting={$selectedIcon}>
  {#if $filtered}
    {#each Object.entries($filtered) as [id, value] (id)}
      <button class="icon" onclick={() => ($selectedIcon = id)} class:active={$selectedIcon === id} title={id}>
        <img src={process.getIconCached(value)} alt="" />
      </button>
    {/each}
  {/if}
</div>
{#if $selectedIcon}
  <IconDetails {process} />
{/if}
