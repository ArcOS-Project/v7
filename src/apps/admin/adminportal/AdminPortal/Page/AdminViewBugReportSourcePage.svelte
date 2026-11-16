<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import type { ViewBugReportSourceData } from "../../types";

  const { process, data }: { process: IAdminPortalRuntime; data: ViewBugReportSourceData } = $props();
  const { report, source } = data;
</script>

{#if !report}
  <p class="error-text">REPORT_NOT_FOUND</p>
{:else if !source?.success}
  <div class="code-viewer">
    <div class="line highlighted">
      <div class="line-number">@@@</div>
      <div class="line-content">
        <div class="error-message">
          <span class="lucide icon-circle-x"></span>
          <span>{source.errorMessage}</span>-<button
            class="link"
            onclick={() => process.switchPage("viewBugReport", { id: report._id })}>Go back</button
          >
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="header">
    <h1>Source for {source.result!.filename ?? data.report._id}</h1>
    <div class="actions">
      <button onclick={() => process.switchPage("viewBugReport", { id: report._id })}>Go back</button>
    </div>
  </div>

  <div class="code-viewer">
    <div class="line">
      <div class="line-number">@@@</div>
      <div class="line-content">. . .</div>
    </div>
    {#each source.result!.prettySource.split("\n") as line, i}
      {#if i > source.result!.prettyLine! - 15 && i < source.result!.prettyLine! + 15}
        {@const highlighted = i + 1 === source.result!.prettyLine}
        <div class="line" class:highlighted>
          <div class="line-number">{i + 1}</div>
          <div class="line-content">
            {line}
          </div>
          {#if highlighted}
            <div class="error-message">
              <span class="lucide icon-circle-x"></span>
              <span>{source.result!.errorMessage}</span>
            </div>
          {/if}
        </div>
      {/if}
    {/each}
    <div class="line">
      <div class="line-number">@@@</div>
      <div class="line-content">. . .</div>
    </div>
  </div>
{/if}
