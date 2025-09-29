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
        %header.title.installed%
      {:else if $installing}
        %header.title.installing%
      {:else if $failReason}
        %header.title.failed%
      {:else}
        {metadata?.name}
      {/if}
    </h1>
    <p>
      {#if $completed}
        %header.subtitle.completed%
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
