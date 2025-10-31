<script lang="ts">
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

<div class="bottom">
  {#if $Progress.max > 0}
    <p class="status">
      {#if $Progress.type == "quantity"}
        %apps.FsProgress.quantity({$Progress.done}::{$Progress.max})%
      {:else if $Progress.type == "size"}
        %apps.FsProgress.size({formatBytes($Progress.done)}::{formatBytes($Progress.max)})%
      {/if}
    </p>
  {/if}
  <button class="cancel" disabled={!$Progress.cancel || canceling} onclick={cancel}> %general.cancel% </button>
</div>
