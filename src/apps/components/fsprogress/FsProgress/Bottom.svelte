<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { FsProgressRuntime } from "../runtime";

  const { process }: { process: FsProgressRuntime } = $props();
  const { Progress } = process;

  let canceling = $state(false);

  async function cancel() {
    canceling = true;

    await $Progress.cancel!();

    process.closeWindow();
  }
</script>

<ActionBar>
  {#snippet leftContent()}
    {#if $Progress.type == "quantity"}
      <ActionSubtle text="{$Progress.done} / {$Progress.max} done" />
    {:else if $Progress.type == "size"}
      <ActionSubtle text="{formatBytes($Progress.done)} / {formatBytes($Progress.max)} done" />
    {/if}
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!$Progress.cancel || canceling} onclick={cancel}>Cancel</ActionButton>
  {/snippet}
</ActionBar>
