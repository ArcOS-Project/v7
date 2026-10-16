<script lang="ts">
  import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
  import StatusBar from "$lib/Window/StatusBar.svelte";
  import StatusSegment from "$lib/Window/StatusBar/StatusSegment.svelte";
  import { Plural } from "$ts/util";
  import { formatBytes } from "$ts/util/fs";

  const { process }: { process: ISqeletonRuntime } = $props();
  const { openedFileName, queryIndex, queries, result, queryHistory, tables, errors, working } = process;
</script>

<StatusBar>
  {#snippet leftContent()}
    <StatusSegment image="DbMimeIcon">{$openedFileName}</StatusSegment>
    <StatusSegment>In query {$queries[$queryIndex]?.filename ?? "None"}</StatusSegment>
    {#if $queries[$queryIndex]?.hasChanges}
      <StatusSegment>Modified</StatusSegment>
    {/if}
    <StatusSegment>{formatBytes($queries[$queryIndex]?.content?.length ?? 0)}</StatusSegment>
  {/snippet}
  {#snippet rightContent()}
    <StatusSegment className="stats">
      <div class="stat" title="{$result?.length || 0} {Plural('result', $result?.length || 0)}">
        <span class="lucide icon-circle-arrow-up"></span>
        <span>{$result?.length || 0}</span>
      </div>
      <div class="stat" title="{$errors?.length || 0} {Plural('error', $errors?.length || 0)}">
        <span class="lucide icon-triangle-alert"></span>
        <span>{$errors?.length || 0}</span>
      </div>
      <div class="stat" title="{$tables?.length || 0} {Plural('table', $tables?.length || 0)}">
        <span class="lucide icon-table"></span>
        <span>{$tables?.length || 0}</span>
      </div>
      <div class="sep"></div>
      <div class="stat" title="{$queryHistory?.length || 0} {Plural('execution', $queryHistory?.length || 0)}">
        <span class="lucide icon-history"></span>
        <span>{$queryHistory?.length || 0}</span>
      </div>
      <div class="stat" title="{$tables?.length || 0} queries">
        <span class="lucide icon-scroll-text"></span>
        <span>{$queries.length}</span>
      </div>
    </StatusSegment>
    <StatusSegment>{$working ? "Working..." : "Ready!"}</StatusSegment>
  {/snippet}
</StatusBar>
