<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import type { FsProgressRuntime } from "../runtime";
  import Status from "./Bottom/Status.svelte";

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
        {$Progress.done} / {$Progress.max} done
      {:else if $Progress.type == "size"}
        {formatBytes($Progress.done)} / {formatBytes($Progress.max)} done
      {/if}
    </p>
  {/if}
  <Status {process} />

  <button class="cancel" disabled={!$Progress.cancel || canceling} onclick={cancel}> Cancel </button>
</div>
