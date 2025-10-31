<script lang="ts">
  import type { AppInstallerRuntime } from "../runtime";

  const { process }: { process: AppInstallerRuntime } = $props();
  const { completed, failReason, installing } = process.progress!;
  const { metadata, isLibrary } = process;
</script>

<div class="header">
  <img src={process.getIconCached($completed ? "GoodStatusIcon" : $failReason ? "ErrorIcon" : "ArcAppMimeIcon")} alt="" />
  <div>
    <h1>
      {#if $completed}
        {#if isLibrary}
          Library installed!
        {:else}
          Package installed!
        {/if}
      {:else if $installing}
        {#if isLibrary}
          Installing library...
        {:else}
          Installing package...
        {/if}
      {:else if $failReason}
        %header.title.failed%
      {:else}
        {metadata?.name}
      {/if}
    </h1>
    <p>
      {#if $completed}
        {#if isLibrary}
          Operation completed successfully.
        {:else}
          Click <b>Open now</b> to launch the app
        {/if}
      {:else if $installing}
        %header.subtitle.installing({metadata?.name}::{metadata?.author})%
      {:else if $failReason}
        {$failReason}
      {:else}
        %header.subtitle.generic({metadata?.author}::{metadata?.version})%
      {/if}
    </p>
  </div>
</div>
