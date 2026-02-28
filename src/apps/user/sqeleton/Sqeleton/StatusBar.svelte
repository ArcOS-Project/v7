<script lang="ts">
  import StatusBar from "$lib/Window/StatusBar.svelte";
  import StatusSegment from "$lib/Window/StatusBar/StatusSegment.svelte";
  import { formatBytes } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import type { SqeletonRuntime } from "../runtime";
  import { Plural } from "$ts/util";

  const { process }: { process: SqeletonRuntime } = $props();
  const { openedFileName, queryIndex, queries, result, queryHistory, tables, errors, working } = process;

  let sqlCode = Store<string>("");

  onMount(() => {
    queryIndex.subscribe((v) => {
      $sqlCode = $queries[v] ?? "";
    });

    queries.subscribe((v) => {
      if (v[$queryIndex] !== $sqlCode) {
        $sqlCode = v[$queryIndex] ?? "";
      }
    });
  });
</script>

<StatusBar>
  {#snippet leftContent()}
    <StatusSegment image={process.getIconCached("DbMimeIcon")}>{$openedFileName}</StatusSegment>
    <StatusSegment>In query #{$queryIndex}</StatusSegment>
    <StatusSegment>{formatBytes($sqlCode.length)}</StatusSegment>
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
