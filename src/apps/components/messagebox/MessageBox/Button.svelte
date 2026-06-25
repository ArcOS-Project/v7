<script lang="ts">
  import type { IMessageBoxRuntime } from "$interfaces/runtimes/IMessageBoxRuntime";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { MessageBoxButton } from "$types/shared/messagebox";
  import { onMount } from "svelte";

  let disabled = $state(false);
  let hidden = $state(false);

  const {
    button,
    process,
    suggestedDisabled,
  }: { button: MessageBoxButton; process: IMessageBoxRuntime; suggestedDisabled: boolean } = $props();

  onMount(async () => {
    if (button.disabled) {
      disabled = await button.disabled();
    }

    if (button.hide) {
      hidden = await button.hide();
    }
  });

  async function go() {
    if (hidden) return;

    disabled = true;

    process.acted.set(true);
    const actionResult = await button.action();

    if (actionResult !== false) {
      await process.closeWindow();
    } else {
      process.acted.set(false);
      disabled = true;
    }
  }
</script>

{#if !hidden}
  <ActionButton suggested={button.suggested} onclick={go} disabled={disabled || (suggestedDisabled && button.suggested)}>
    {button.caption}
  </ActionButton>
{/if}
