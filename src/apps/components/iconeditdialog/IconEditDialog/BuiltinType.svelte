<script lang="ts">
  import type { IconEditDialogRuntime } from "../runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { type, values } = process;

  async function choose() {
    $values[$type] =
      (await process.userDaemon!.helpers!.IconPicker({
        forWhat: process.id!,
        defaultIcon: $values[$type] || "ComponentIcon",
      })) || $values[$type];
  }
</script>

<div class="edit type-builtin">
  <h2>Icon ID:</h2>
  <div class="input">
    <div class="field">
      {#if $values[$type]}
        <img src={process.getIconCached(`@builtin::${$values[$type]}`)} alt="" />
      {/if}
      <span>{$values[$type]}</span>
    </div>
    <button class="lucide icon-pencil" onclick={choose} aria-label="Choose icon" title="Choose icon"></button>
  </div>
</div>
