<script lang="ts">
  import { DefaultIcon } from "$ts/images/apps";
  import { WarningIcon } from "$ts/images/dialog";
  import { ComponentIcon } from "$ts/images/general";
  import { BadStatusIcon } from "$ts/images/status";
  import type { OopsStackTracerRuntime } from "./runtime";

  const { process }: { process: OopsStackTracerRuntime } = $props();
  const { data, proc, trace, stackFrames } = process;
  let original = $state<boolean>(false);
</script>

<div class="process">
  <img src={process.userDaemon?.getAppIcon(data) || ComponentIcon} alt="" />
  <p class="name">{data.metadata.name}</p>
  {#if proc?.pid}
    <p class="pid">(PID {proc.pid})</p>
  {/if}
  <p class="path">{data.workingDirectory || proc?.app.data.workingDirectory || "Unknown source"}</p>
</div>

<div class="stack-trace" class:original>
  {#if !trace && !stackFrames.length}
    <div class="no-trace">
      <span class="lucide icon-circle-slash"></span>
      <h1>No stack trace</h1>
      <p>ArcOS failed to parse the stack trace of this crash.</p>
    </div>
  {:else if original}
    <code class="block stack-trace">{trace}</code>
  {:else}
    <div class="stack-frame first">
      <img src={WarningIcon} alt="" />
      <span>{process.string}</span>
    </div>
    <hr />
    {#each stackFrames as frame, i}
      {#if i && stackFrames[i - 1] && !!stackFrames[i - 1].parsed !== !!frame.parsed}
        <hr />
      {/if}
      <div class="stack-frame" class:internal={!frame.parsed}>
        <img src={!i ? BadStatusIcon : DefaultIcon} alt="" />
        <p class="source">{frame.parsed?.filename || "ArcOS Internal"}</p>
        <p class="method" title={frame.methodName || ""} class:anonymous={!frame.methodName}>
          {frame.methodName || "(anonymous)"}
        </p>
        {#if frame.parsed}
          <div class="location">
            <span class="line">{frame.lineNumber}</span>
            <span class="colon">:</span>
            <span class="column">{frame.column}</span>
          </div>
        {/if}
      </div>
    {/each}
  {/if}
</div>

<div class="actions">
  <button onclick={() => (original = !original)} disabled={!trace}>{original ? "View parsed" : "View raw"}</button>
  <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
</div>
