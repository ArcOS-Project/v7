<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import type { BugReport } from "$types/server/bughunt";
  import type { ExpandedUserInfo } from "$types/user";

  const { process, reports, user }: { process: IAdminPortalRuntime; reports: BugReport[]; user: ExpandedUserInfo } = $props();
  const userReports = reports.filter((r) => r.authorId === user._id);
</script>

<div class="section reports">
  <h1>Reports</h1>
  <div class="table-wrapper report-list shrink">
    <table>
      <thead>
        <tr>
          <th class="icon-col">
            <span class="lucide icon-bug"></span>
          </th>
          <th>Title</th>
          <th>Closed</th>
        </tr>
      </thead>
      <colgroup></colgroup>
      <tbody>
        {#each userReports as report (report._id)}
          <tr>
            <td class="icon-col">
              <span class="lucide icon-bug"></span>
            </td>
            <td>{report.title}</td>
            <td>{report.closed ? "Yes" : "No"}</td>
          </tr>
        {/each}
        {#if !userReports.length}
          <tr>
            <td colspan="3">
              <p class="error-text">NO_REPORTS</p>
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
