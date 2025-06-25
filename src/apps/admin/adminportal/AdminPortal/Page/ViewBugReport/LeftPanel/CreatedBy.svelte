<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { BugReport } from "$types/bughunt";
  import dayjs from "dayjs";

  const { report, process }: { report: BugReport; process: AdminPortalRuntime } = $props();
  let timestamp = dayjs(report.createdAt).format("MMMM D, YYYY hh:mm A");
</script>

<div class="property createdby">
  <p class="key">Created By</p>
  <p class="value">
    {#if report.userData?.username}
      <button
        class="link"
        onclick={async () =>
          process.switchPage("viewUser", { user: await process.admin.getUserByUsername(report.userData?.username) })}
        >{report.userData.username}</button
      >{:else}no user{/if} on {timestamp}
  </p>
</div>
