<script lang="ts">
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoRow from "$lib/InfoBlock/InfoRow.svelte";
  import Segment from "$lib/InfoBlock/InfoRow/Segment.svelte";
  import { AppProcess } from "$ts/apps/process";
  import { Env, Stack } from "$ts/env";
  import { Daemon } from "$ts/server/user/daemon";
  import type { ProcessInfoRuntime } from "./runtime";

  const { process }: { process: ProcessInfoRuntime } = $props();
  const { proc, parent, inherit } = process;

  const icon =
    (proc instanceof AppProcess ? Daemon()?.icons?.getAppIcon(proc.app.data)! : process.getIconCached("ComponentIcon"));
  const children = Stack().getSubProcesses(proc!.pid);
  const context = Stack().getProcessContext(proc!.pid);

  function info() {
    process.spawnOverlayApp("AppInfo", +Env().get("shell_pid"), (proc as AppProcess).app.id);
  }
</script>

{#if proc}
  <div class="header">
    <img src={icon} alt="" />
    <div class="base-info">
      <h1>{proc.name}</h1>
      <p>Process {proc.pid}</p>
    </div>
  </div>
  <InfoBlock>
    <InfoRow>
      <Segment title="Type">{inherit?.name || "Unknown"}</Segment>
      <Segment title="PID">{proc.pid}</Segment>
      <Segment title="Parent PID">{proc.parentPid} ({parent?.name || "?"})</Segment>
      <Segment title="Children">{children.size}</Segment>
    </InfoRow>
    <InfoRow>
      <Segment title="Critical">{process._criticalProcess ? "Yes" : "No"}</Segment>
      <Segment title="Disposed">{process._disposed ? "Yes" : "No"}</Segment>
      <Segment title="User ID">{context?.userId || "NOBODY"}</Segment>
    </InfoRow>
  </InfoBlock>
  <InfoBlock>
    <InfoRow>
      <Segment title="Source Path">{proc.sourceUrl || import.meta.url}</Segment>
      <Segment title="Source Type">{proc.sourceUrl ? "Original" : "Interpreted"}</Segment>
    </InfoRow>
  </InfoBlock>
  {#if proc instanceof AppProcess}
    <InfoBlock>
      <InfoRow>
        <Segment title="App ID" alt={proc.app.id}>{proc.app.id}</Segment>
        <Segment title="Origin" alt={proc.app.data.originId}>{proc.app.data.originId}</Segment>
        <Segment title="Desktop" alt={proc.app.desktop}>{proc.app.desktop || "-"}</Segment>
      </InfoRow>
    </InfoBlock>
  {/if}
  <div class="actions">
    <button class="kill" onclick={() => process.kill(proc)}>Kill</button>
    <button onclick={info} disabled={!(proc instanceof AppProcess)}>App Info</button>
    <button class="suggested" onclick={() => process.closeWindow()}>Okay</button>
  </div>
{/if}
