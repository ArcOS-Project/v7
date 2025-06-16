<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { BugReport } from "$types/bughunt";
  import type { ExpandedUserInfo } from "$types/user";

  const { process, reports, user }: { process: AdminPortalRuntime; reports: BugReport[]; user: ExpandedUserInfo } = $props();
  const userReports = reports.filter((r) => r.authorId === user._id);
</script>

<div class="section reports">
  <h1>Reports</h1>
  <div class="report-list">
    {#if userReports.length}
      <div class="report-row header">
        <div class="segment icon">
          <span class="lucide icon-bug"></span>
        </div>
        <div class="segment title">Title</div>
        <div class="segment closed">CLO</div>
      </div>
      {#each userReports as report (report._id)}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="report-row" ondblclick={() => process.switchPage("viewBugReport", { report })}>
          <div class="segment icon">
            <span class="lucide icon-bug"></span>
          </div>
          <div class="segment title">{report.title}</div>
          <div class="segment closed">{report.closed ? "Yes" : "No"}</div>
        </div>
      {/each}
    {:else}
      <p class="error-text">No bug reports!</p>
    {/if}
  </div>
</div>
