<script lang="ts">
  import type { MessageBoxButton } from "$types/messagebox";
  import type { MessageBoxRuntime } from "../runtime";

  let disabled = $state(false);

  const {
    button,
    process,
  }: { button: MessageBoxButton; process: MessageBoxRuntime } = $props();

  async function go() {
    disabled = true;

    await button.action();
    await process.closeWindow();
  }
</script>

<button onclick={go} class:suggested={button.suggested}>{button.caption}</button
>
