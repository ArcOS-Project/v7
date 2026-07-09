<script lang="ts">
  import type { IFsProgressRuntime } from "$interfaces/runtimes/IFsProgressRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import ActionSubtle from "$lib/Window/ActionBar/ActionSubtle.svelte";
  import { formatBytes } from "$ts/util/fs";

  const { process }: { process: IFsProgressRuntime } = $props();
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
      <ActionSubtle text="%apps.FsProgress.quantity({$Progress.done}::{$Progress.max})%" />
    {:else if $Progress.type == "size"}
      <ActionSubtle text="%apps.FsProgress.size({formatBytes($Progress.done)}::{formatBytes($Progress.max)})%" />
    {/if}
  {/snippet}
  {#snippet rightContent()}
    <ActionButton disabled={!$Progress.cancel || canceling} onclick={cancel}>%general.cancel%</ActionButton>
  {/snippet}
</ActionBar>
