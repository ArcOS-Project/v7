<script lang="ts">
  import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import type { IconButtonBlock } from "$types/system/mui";

  let { renderer, block }: { renderer: IMuiRenderer; block: IconButtonBlock } = $props();

  let isDisabled = $derived(renderer.ConditionsMet(block.disabledIf ?? []));
</script>

<ActionIconButton
  title={block.title}
  icon={block.icon}
  disabled={$isDisabled}
  onclick={() => renderer.PerformAction(block.onclick)}
></ActionIconButton>
