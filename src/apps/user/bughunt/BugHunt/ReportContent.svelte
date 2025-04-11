<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { formatBytes } from "$ts/fs/util";
  import type { BugReport } from "$types/bughunt";
  import type { BugHuntRuntime } from "../runtime";
  import ReportNotFound from "./ReportContent/ReportNotFound.svelte";

  const {
    process,
    report,
    date,
    time,
  }: { process: BugHuntRuntime; report: BugReport | undefined; date: string | undefined; time: string | undefined } = $props();
</script>

{#if report}
  <h1>{report.title}</h1>
  <p class="sub">Submitted by {report.userData?.username || "somebody"} on {date} at {time}</p>
  <InfoBlock>
    <InfoRow>
      <Segment title="Created By">
        {report.userData?.username || "Unknown"}
      </Segment>
      <Segment title="Date">
        {date}
      </Segment>
      <Segment title="Time">
        {time}
      </Segment>
      <Segment title="Server">
        {report.api}
      </Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="User Agent">
        {report.userAgent}
      </Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Client">
        {report.location.host}
      </Segment>
      <Segment title="Vite">
        {report.meta.DEV ? "Development" : "Production"}
      </Segment>
      <Segment title="Mode">
        {report.mode}
      </Segment>
      <Segment title="Build">
        {report.build}
      </Segment>
      <Segment right title="Version">
        {report.version}
      </Segment>
    </InfoRow>
  </InfoBlock>
  <InfoBlock>
    <InfoRow>
      <Segment title="Public">
        {report.public || !report.authorId ? "Yes" : "No"}
      </Segment>
      <Segment title="Resolved">
        {report.resolved ? "Yes" : "No"}
      </Segment>
      <Segment title="Closed">
        {report.resolved ? "Yes" : "No"}
      </Segment>
      <Segment title="User data">
        {report.userData ? "Included" : "Excluded"}
      </Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Logs">
        {report.logs.length} items
      </Segment>
      <Segment title="Body size">
        {formatBytes(report.body.length)}
      </Segment>
      <Segment title="Report size">
        {formatBytes(JSON.stringify(report).length)}
      </Segment>
      <Segment title="ID">
        {report._id}
      </Segment>
    </InfoRow>
  </InfoBlock>
{:else}
  <ReportNotFound {process} />
{/if}
