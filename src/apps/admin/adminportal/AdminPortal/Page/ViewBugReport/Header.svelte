<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import { getReportIcon } from "$apps/admin/adminportal/util";
  import Close from "./Header/Close.svelte";
  import Copy from "./Header/Copy.svelte";
  import Delete from "./Header/Delete.svelte";
  import Download from "./Header/Download.svelte";
  import UserData from "./Header/UserData.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report } = data;
</script>

<div class="header">
  <div class="title">
    <img src={getReportIcon(report)} alt="" />
    <span>{report.title}</span>
  </div>
  <div class="shortcuts">
    <Copy {data} {process} />
    <Download {data} {process} />
    <UserData {data} {process} />
  </div>
  <div class="actions">
    <Close {process} {data} />
    <Delete {process} {data} />
    <button class="go-back" onclick={() => process.switchPage("bughunt")}>Go Back</button>
  </div>
</div>
