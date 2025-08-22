<script lang="ts">
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

<div class="actions">
  <div class="left">
    <button class="reset-icon" onclick={() => ($selected = defaultIcon)} disabled={$selected === defaultIcon}>Reset</button>
    <button class="random">Random</button>
  </div>
  <div class="right">
    <button class="cancel" onclick={() => process.cancel()}>Cancel</button>
    <button class="suggested" onclick={() => process.confirm()} disabled={!$selected}>Choose</button>
  </div>
</div>
