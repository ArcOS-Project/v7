<script lang="ts">
  import type { MessageBoxButton } from "$types/messagebox";
  import type { MessageBoxRuntime } from "../runtime";

  let disabled = $state(false);

  const {
    button,
    process,
    suggestedDisabled,
  }: { button: MessageBoxButton; process: MessageBoxRuntime; suggestedDisabled: boolean } = $props();

  async function go() {
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

<button onclick={go} class:suggested={button.suggested} disabled={disabled || (suggestedDisabled && button.suggested)}>
  {button.caption}
</button>
