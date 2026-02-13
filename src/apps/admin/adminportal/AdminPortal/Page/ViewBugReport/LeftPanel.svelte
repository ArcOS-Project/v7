<script lang="ts">
  import type { BugReportTpaFile } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { Daemon } from "$ts/server/user/daemon";
  import { formatBytes } from "$ts/util/fs";
  import type { BugReport } from "$types/bughunt";
  import { onMount } from "svelte";
  import Client from "./LeftPanel/Client.svelte";
  import CreatedBy from "./LeftPanel/CreatedBy.svelte";
  import Provided from "./LeftPanel/Provided.svelte";
  import Server from "./LeftPanel/Server.svelte";
  import UserAgent from "./LeftPanel/UserAgent.svelte";

  const { report, process }: { report: BugReport; process: IAdminPortalRuntime } = $props();

  let loadingFiles = $state<boolean>(true);
  let tpaFiles: BugReportTpaFile[] = $state([]);

  onMount(async () => {
    tpaFiles = await process.saveTpaFilesOfBugReport(report);
    loadingFiles = false;
  });

  async function openTpaFile(file: BugReportTpaFile) {
    await process.spawnApp("cod", process.pid, file.filePath);
  }
</script>

<div class="leftpanel">
  <CreatedBy {report} {process} />
  <Server {report} />
  <UserAgent {report} />
  <Client {report} />
  <Provided {report} />
  <div class="report-body">
    <textarea class="body" readonly spellcheck="false">{report.body}</textarea>
    <div class="tpa-files">
      {#if loadingFiles}
        <span class="loading">Parsing TPA files...</span>
      {:else}
        {#each tpaFiles as file}
          <button class="file" ondblclick={() => openTpaFile(file)} disabled={file.unavailable}>
            <img
              src={Daemon?.assoc?.getFileAssociation(file.filePath)?.icon || process.getIconCached("DefaultMimeIcon")}
              alt=""
            />
            <span class="filename">{file.filename}</span>
            {#if !file.unavailable}
              <span class="size">{formatBytes(file.size)}</span>
            {:else}
              <span>(unavailable)</span>
            {/if}
          </button>
        {/each}
      {/if}
    </div>
  </div>
</div>
