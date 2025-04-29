<script lang="ts">
  import type { BugReport } from "$types/bughunt";
  import Client from "./LeftPanel/Client.svelte";
  import CreatedBy from "./LeftPanel/CreatedBy.svelte";
  import Provided from "./LeftPanel/Provided.svelte";
  import Server from "./LeftPanel/Server.svelte";
  import UserAgent from "./LeftPanel/UserAgent.svelte";

  const { report }: { report: BugReport } = $props();
</script>

<div class="leftpanel">
  <CreatedBy {report} />
  <Server {report} />
  <UserAgent {report} />
  <Client {report} />
  <Provided {report} />
  <div class="report-body">
    <textarea class="body" readonly spellcheck="false">{report.body}</textarea>
  </div>
</div>
