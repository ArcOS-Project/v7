<script lang="ts">
  import type { AppInstallerRuntime } from "../runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
  const { installing, completed, failReason } = process.progress!;
</script>

<div class="actions">
  {#if $failReason}
    <button class="suggested" onclick={() => process.revert()}>%actions.revert%</button>
  {:else if $installing || $completed}
    <button onclick={() => process.runNow()} disabled={$installing}>%actions.openNow%</button>
    <button class:suggested={$completed} disabled={!$completed} onclick={() => process.closeWindow()}>%actions.done%</button>
  {:else}
    <button onclick={() => process.closeWindow()}>%general.cancel%</button>
    <button class="suggested" onclick={() => process.go()}>%actions.install%</button>
  {/if}
</div>
