<script lang="ts">
  import type { IIconEditDialogRuntime } from "$interfaces/runtimes/IIconEditDialogRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";

  const { process }: { process: IIconEditDialogRuntime } = $props();
  const { type, values } = process;

  async function choose() {
    $values[$type] =
      (await Daemon!.helpers!.IconPicker({
        forWhat: process.iconName!,
        defaultIcon: $values[$type] || "ComponentIcon",
      })) || $values[$type];
  }
</script>

<div class="edit type-builtin">
  <h2>%builtinType.title%</h2>
  <div class="input">
    <div class="field">
      {#if $values[$type]}
        <Icon icon="@builtin::{$values[$type]}" />
      {/if}
      <span>{$values[$type]}</span>
    </div>
    <button class="lucide icon-pencil" onclick={choose} aria-label="%" title="%builtinType.buttonTitle%"></button>
  </div>
</div>
