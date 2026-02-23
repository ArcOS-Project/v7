<script lang="ts">
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { getReportIcon } from "$ts/util/admin";
  import Close from "./Header/Close.svelte";
  import Copy from "./Header/Copy.svelte";
  import Delete from "./Header/Delete.svelte";
  import Download from "./Header/Download.svelte";
  import OpenLogs from "./Header/OpenLogs.svelte";
  import StoreItemLink from "./Header/StoreItemLink.svelte";
  import UserData from "./Header/UserData.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report } = data;
</script>

<div class="header">
  <div class="title">
    <img src={getReportIcon(report)} alt="" />
    <span>{report.title}</span>
  </div>
  <div class="shortcuts">
    {#if report.isAppReport}
      <StoreItemLink {data} {process} />
    {/if}
    <Copy {data} {process} />
    <Download {data} {process} />
    <UserData {data} {process} />
    <OpenLogs {data} {process} />
  </div>
  <div class="actions">
    <Close {process} {data} />
    <Delete {process} {data} />
    <button class="go-back" onclick={() => process.switchPage("bughunt")}>Go Back</button>
  </div>
</div>
