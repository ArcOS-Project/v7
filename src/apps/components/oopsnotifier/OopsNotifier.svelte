<script lang="ts">
  import { ComponentIcon } from "$ts/images/general";
  import type { OopsNotifierRuntime } from "./runtime";

  const { process }: { process: OopsNotifierRuntime } = $props();
  const { data } = process;
</script>

<div class="header">
  <img src={process.userDaemon?.getAppIcon(data) || ComponentIcon} alt="" />
  <h1>{data.metadata.name} crashed</h1>
  <p>
    If you were in the middle of something, the information you were working on might be lost. You can view the stack trace, which
    can tell you why the app crashed.
  </p>
</div>

<div class="actions">
  {#if process.stackFrames.length}
    <button class="suggested" onclick={() => process.details()}>View stack trace</button>
    <div class="alternatives">
      <button onclick={() => process.reopen()} disabled={!process.installed}>Restart app</button>
      <button onclick={() => process.closeWindow()}>Close</button>
    </div>
  {:else}
    <button onclick={() => process.reopen()} disabled={!process.installed} class="suggested">Restart app</button>
    <button onclick={() => process.closeWindow()}>Close</button>
  {/if}
</div>
