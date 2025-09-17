<script lang="ts">
  import type { AppInstallerRuntime } from "../runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
  const { completed, failReason, installing } = process.progress!;
  const { metadata } = process;
</script>

<div class="header">
  <img src={process.getIconCached($completed ? "GoodStatusIcon" : $failReason ? "ErrorIcon" : "ArcAppMimeIcon")} alt="" />
  <div>
    <h1>
      {#if $completed}
        Package installed!
      {:else if $installing}
        Installing package...
      {:else if $failReason}
        Installation failed
      {:else}
        {metadata?.name}
      {/if}
    </h1>
    <p>
      {#if $completed}
        Click <b>Open now</b> to launch the app
      {:else if $installing}
        {metadata?.name} by {metadata?.author}
      {:else if $failReason}
        {$failReason}
      {:else}
        {metadata?.author} - {metadata?.version}
      {/if}
    </p>
  </div>
</div>
