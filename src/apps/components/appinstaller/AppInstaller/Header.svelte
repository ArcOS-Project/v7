<script lang="ts">
  import { ErrorIcon } from "$ts/images/dialog";
  import { ArcAppMimeIcon } from "$ts/images/mime";
  import { GoodStatusIcon } from "$ts/images/status";
  import type { AppInstallerRuntime } from "../runtime";
  const { process }: { process: AppInstallerRuntime } = $props();
  const { completed, failReason, installing, status } = process.progress!;
  const { metadata } = process;
</script>

<div class="header">
  <img src={$completed ? GoodStatusIcon : $failReason ? ErrorIcon : ArcAppMimeIcon} alt="" />
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
