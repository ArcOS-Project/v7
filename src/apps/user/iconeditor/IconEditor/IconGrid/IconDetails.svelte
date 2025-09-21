<script lang="ts">
  import type { IconEditorRuntime } from "../../runtime";
  import { IconIdTypeCaptions } from "../../store";

  const { process }: { process: IconEditorRuntime } = $props();
  const { selectedIcon, icons } = process;

  let type = $state<string>();
  let value = $state<string>();

  selectedIcon.subscribe((v) => update(v));
  icons.subscribe((v) => update($selectedIcon, v));

  function update(id = $selectedIcon, store = $icons) {
    const split = store[id]?.split("::");

    type = split?.[0];
    value = split?.[1];
  }
</script>

{#if type && value}
  <div class="details">
    <div class="icon">
      <img src={process.getIconCached($icons[$selectedIcon])} alt={$selectedIcon} />
    </div>
    <div class="info">
      <h1>{$selectedIcon}</h1>
      <div class="set-to">
        <p>Set to:</p>
        <div>
          <p class="type">{IconIdTypeCaptions[type]}</p>
          <p class="value">{value}</p>
        </div>
      </div>
      <div class="actions">
        <button class="suggested" onclick={() => process.editIcon()}>Change...</button>
        <button
          disabled={type === "@builtin" && value === $selectedIcon}
          onclick={() => ($icons[$selectedIcon] = `@builtin::${$selectedIcon}`)}>Reset</button
        >
      </div>
    </div>
  </div>
{/if}
