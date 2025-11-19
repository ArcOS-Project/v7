<script lang="ts">
  import type { OopsNotifierRuntime } from "./runtime";

  const { process }: { process: OopsNotifierRuntime } = $props();
  const { data } = process;
</script>

<div class="header">
  <img src={process.userDaemon?.appreg!.getAppIcon(data) || process.getIconCached("ComponentIcon")} alt="" />
  <h1>{data?.id === "ArcOS" ? "System error occurred" : `${data?.metadata?.name || "Something"} crashed`}</h1>
  <p>
    {#if data?.id === "ArcOS"}
      An error occurred while running some system code. ArcOS might be unstable until you restart, the stack trace might tell you
      why the error occurred.
    {:else if !process.parseFailed}
      If you were in the middle of something, the information you were working on might be lost. You can view the stack trace,
      which can tell you why the app crashed.
    {:else}
      An unknown error occurred that wasn't handled properly. Unsaved information might have been lost. That's all I could figure
      out.
    {/if}
  </p>
</div>

<div class="actions">
  {#if process.stackFrames.length && !process.parseFailed}
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
