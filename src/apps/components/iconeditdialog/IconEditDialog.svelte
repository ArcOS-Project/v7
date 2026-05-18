<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import AppType from "./IconEditDialog/AppType.svelte";
  import BuiltinType from "./IconEditDialog/BuiltinType.svelte";
  import FileType from "./IconEditDialog/FileType.svelte";
  import ModeToggle from "./IconEditDialog/ModeToggle.svelte";
  import type { IconEditDialogRuntime } from "./runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { iconName, type, currentIcon, values } = process;
</script>

<div class="left">
  <div class="top">
    <h1>Change {iconName}</h1>
    <ModeToggle {process} />
    {#if $type === "@fs"}
      <FileType {process} />
    {:else if $type === "@app"}
      <AppType {process} />
    {:else if $type === "@builtin"}
      <BuiltinType {process} />
    {/if}
  </div>
  <ActionBar>
    {#snippet leftContent()}
      {#if process.defaultIcon}
        <ActionButton onclick={() => process.default} disabled={`${$type}::${$values[$type]}` === process.defaultIcon}>
          Default
        </ActionButton>
      {/if}
    {/snippet}
    {#snippet rightContent()}
      <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
      <ActionButton suggested onclick={() => process.save()}>Save</ActionButton>
    {/snippet}
  </ActionBar>
</div>
<div class="right">
  <div class="icon">
    <img src={$currentIcon} alt="" />
  </div>
  <h1>{iconName}</h1>
</div>
