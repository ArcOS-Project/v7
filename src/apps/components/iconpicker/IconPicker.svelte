<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import Header from "./IconPicker/Header.svelte";
  import Icon from "./IconPicker/Icon.svelte";
  import type { IconPickerRuntime } from "./runtime";
  import { ICON_GROUP_CAPTIONS } from "./store";

  const { process }: { process: IconPickerRuntime } = $props();
  const { groups, selected, defaultIcon } = process;
</script>

<Header {process} />

<div class="selector">
  {#each Object.entries(ICON_GROUP_CAPTIONS) as [group, caption]}
    <section>
      <h1>{caption}</h1>
      <div class="icons">
        {#each Object.entries(groups[group] || {}) as [id, icon]}
          <Icon {process} {id} {icon} />
        {/each}
      </div>
    </section>
  {/each}
</div>

<ActionBar floating>
  {#snippet leftContent()}
    <ActionButton
      onclick={() => ($selected = defaultIcon || process.getIconCached("DefaultIcon"))}
      disabled={$selected === defaultIcon}
    >
      Reset
    </ActionButton>
    <ActionButton onclick={() => process.selectRandom()}>Random</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton onclick={() => process.cancel()}>Cancel</ActionButton>
    <ActionButton suggested onclick={() => process.confirm()} disabled={!$selected}>Choose</ActionButton>
  {/snippet}
</ActionBar>
