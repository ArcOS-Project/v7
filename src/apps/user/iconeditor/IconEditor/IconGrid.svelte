<script lang="ts">
  import type { IIconEditorRuntime } from "$interfaces/runtimes/IIconEditorRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development
  import IconDetails from "./IconGrid/IconDetails.svelte";

  const { process }: { process: IIconEditorRuntime } = $props();
  const { selectedIcon, filtered } = process;
</script>

<div class="grid" class:selecting={$selectedIcon}>
  {#if $filtered}
    {#each Object.entries($filtered) as [id, value] (id)}
      <button class="icon" onclick={() => ($selectedIcon = id)} class:active={$selectedIcon === id} title={id}>
        <Icon icon={value} />
      </button>
    {/each}
  {/if}
</div>
{#if $selectedIcon}
  <IconDetails {process} />
{/if}
