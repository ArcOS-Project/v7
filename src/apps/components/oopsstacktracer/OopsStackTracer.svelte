<script lang="ts">
  import type { OopsStackTracerRuntime } from "./runtime";

  const { process }: { process: OopsStackTracerRuntime } = $props();
  const { data, proc, trace, stackFrames } = process;
  let original = $state<boolean>(false);
</script>

<div class="process">
  <img src={process.userDaemon?.icons!.getAppIcon(data) || process.getIconCached("ComponentIcon")} alt="" />
  <p class="name">{data?.metadata?.name || "Unknown app"}</p>
  {#if proc?.pid}
    <p class="pid">(PID {proc.pid})</p>
  {/if}
  <p class="path">{data?.workingDirectory || proc?.app?.data?.workingDirectory || "Unknown source"}</p>
</div>

<div class="stack-trace" class:original>
  {#if !trace && !stackFrames?.length}
    <div class="no-trace">
      <span class="lucide icon-circle-slash"></span>
      <h1>No stack trace</h1>
      <p>ArcOS failed to parse the stack trace of this crash.</p>
    </div>
  {:else if original}
    <code class="block stack-trace">{trace}</code>
  {:else}
    <div class="stack-frame first">
      <img src={process.getIconCached("WarningIcon")} alt="" />
      <span>
        {process.string ||
          "Unable to determine the stack trace from the given process arguments. This application might have been invoked improperly. If this wasn't intentional, please report."}
      </span>
    </div>
    <hr />
    {#if !process.string && !stackFrames?.length}
      <div class="stack-frame">
        <img src={process.getIconCached("QuestionIcon")} alt="" />
        <p class="source">Stack frames</p>
        <p class="method">{stackFrames?.length || 0}</p>
      </div>
      <div class="stack-frame">
        <img src={process.getIconCached("QuestionIcon")} alt="" />
        <p class="source">Exception</p>
        <p class="method">{process.exception || "<none>"}</p>
      </div>
      <div class="stack-frame">
        <img src={process.getIconCached("QuestionIcon")} alt="" />
        <p class="source">Call stack</p>
        <p class="method">{process.trace || "<none>"}</p>
      </div>
    {/if}
    {#each stackFrames as frame, i}
      {#if i && stackFrames[i - 1] && !!stackFrames[i - 1].parsed !== !!frame.parsed}
        <hr />
      {/if}
      <div class="stack-frame" class:internal={!frame.parsed}>
        <img src={!i ? process.getIconCached("BadStatusIcon") : process.getIconCached("DefaultIcon")} alt="" />
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
