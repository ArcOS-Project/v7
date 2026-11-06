<script lang="ts">
  import type { ICommandResult } from "$interfaces/ICommandResult";
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import { Sleep } from "$ts/sleep";

  let { process }: { process: IAdminPortalRuntime } = $props();
  let jobName = $state<string>("");
  let lines: string[] = $state([]);
  let output = $state<HTMLDivElement>();
  let running = $state(false);
  let result = $state<ICommandResult | undefined>();

  const jobs = process.admin.Jobs;

  async function runJob() {
    if (!jobName) return;

    lines = [];

    running = true;
    result = await process.admin.RunJob(jobName, broadcast);
    running = false;
  }

  async function broadcast(message: string) {
    lines.push(message);
    await Sleep(1);

    output!.scrollTop = output!.scrollHeight;
  }
</script>

<div class="header">
  <h1>Job Runner</h1>

  {#if !!result && !running}
    <div class="status" class:clr-red={!result.success} class:clr-green={result.success}>
      {#if result.success}
        Executed successfully
      {:else}
        {result.errorMessage || "Unknown error"}
      {/if}
    </div>
  {/if}

  <select bind:value={jobName}>
    <option value="" disabled selected>{jobName}</option>

    {#each jobs as job (job.name)}
      <option value={job.name}>{job.name}</option>
    {/each}
  </select>
  <button disabled={!jobName} onclick={runJob}>Run</button>
</div>

<div class="output" bind:this={output}>
  {#each lines as line, i}
    <p>{i.toString().padStart(4)}: {line}</p>
  {/each}
</div>
