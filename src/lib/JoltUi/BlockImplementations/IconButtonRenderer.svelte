<script lang="ts">
  import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
  import ActionIconButton from "$lib/Window/ActionBar/ActionIconButton.svelte";
  import type { JoltIconButtonBlock } from "$types/system/jui";

  let { renderer, block }: { renderer: IJuiRenderer; block: JoltIconButtonBlock } = $props();

  let isDisabled = $derived(renderer.ConditionsMet(block.disabledIf ?? []));
</script>

<ActionIconButton
  title={block.title}
  icon={block.icon}
  disabled={$isDisabled}
  onclick={() => renderer.PerformAction(block.onclick)}
></ActionIconButton>
