<script lang="ts">
  import type { AppInstallerRuntime } from "../runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
  const { isLibrary } = process;
  const { installing, completed, failReason } = process.progress!;
</script>

<div class="actions">
  {#if $failReason}
    <button class="suggested" onclick={() => process.revert()}>%actions.revert%</button>
  {:else if $installing || $completed}
    {#if !isLibrary}
      <button onclick={() => process.runNow()} disabled={$installing}>%actions.openNow%</button>
    {/if}
    <button class:suggested={$completed} disabled={!$completed} onclick={() => process.closeWindow()}>Done</button>
  {:else}
    <button onclick={() => process.closeWindow()}>%general.cancel%</button>
    <button class="suggested" onclick={() => process.go()}>%actions.install%</button>
  {/if}
</div>
