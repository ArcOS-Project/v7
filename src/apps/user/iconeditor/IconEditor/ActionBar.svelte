<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import type { IconEditorRuntime } from "../runtime";

  const { process }: { process: IconEditorRuntime } = $props();
  const { icons, hasChanges } = process;
</script>

<ActionBar>
  {#snippet leftContent()}
    <ActionSubtle text="{Object.entries($icons)?.length} icons" />
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!$hasChanges} onclick={() => process.revert()}>Revert</ActionButton>
    <ActionButton suggested disabled={!$hasChanges} icon="shield" onclick={() => process.save()}>Save</ActionButton>
  {/snippet}
</ActionBar>
