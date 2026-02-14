<script lang="ts">
  import UserLink from "$lib/UserLink.svelte";
  import { StoreItemIcon } from "$ts/util/distrib";
  import { Sleep } from "$ts/sleep";
  import { Plural } from "$ts/util";
  import type { MultiUpdateGuiRuntime } from "./runtime";
  import { StateIconTranslations } from "./types";

  const { process }: { process: MultiUpdateGuiRuntime } = $props();
  const { status, working, done, errored, currentPackage, logs, focused, showLog, unified } = process;

  focused.subscribe(async (v) => {
    await Sleep(0);

    elements[v]?.scrollIntoView();
  });

  let elements: Record<string, HTMLDivElement> = {};
</script>

<div class="header">
  <img
    src={$working && $currentPackage
      ? StoreItemIcon($currentPackage)
      : $done
        ? process.getIconCached("GoodStatusIcon")
        : "UpdateIcon"}
    alt=""
  />
  <div class="info">
    <h1>
      {#if $working}
        {#if $currentPackage}
          Updating {$currentPackage.pkg.name}
        {:else}
          Just a moment
        {/if}
      {:else if $done}
        Finished updating
      {:else}
        Ready to update
      {/if}
    </h1>
    <p class="sub">
      {#if $working}
        {#if $currentPackage && $currentPackage.user}
          <span title={$currentPackage.user?.username || ""}>
            By <UserLink user={$currentPackage.user} fallback={$currentPackage.pkg.author} />
          </span>
        {:else}
          Loading...
        {/if}
      {:else if $done}
        {#if $errored.length}
          {$errored.length} {Plural("error", $errored.length)} occurred
        {:else}
          All packages were updated.
        {/if}
      {:else}
        Click <b>Update</b> to begin
      {/if}
    </p>
  </div>
</div>
<div class="update-bar" class:unified={$unified}>
  {#if $unified}
    <div class="bar">
      <div
        class="inner"
        style="--w: {(100 / $status.length) * $status.filter((n) => n.state === 'success' || n.state === 'failed').length}%;"
      ></div>
    </div>
  {:else}
    {#each $status as node}
      <div class="node">
        <div class="bar">
          <div class="inner" style="--w: {(100 / node.max) * node.done}%;"></div>
        </div>
        <span class="lucide icon-{StateIconTranslations[node.state]} state-{node.state}"></span>
      </div>
    {/each}
  {/if}
</div>

<div class="log" class:unified={$unified} class:show={$showLog}>
  {#each Object.entries($logs) as [_, phase]}
    {#each Object.entries(phase) as [uuid, item] (uuid)}
      <div class="item" bind:this={elements[uuid]}>
        <p class="type">
          {#if item.type === "file"}
            Writing file
          {:else if item.type === "mkdir"}
            Creating directory
          {:else if item.type === "registration"}
            Registering
          {:else}
            Status
          {/if}
        </p>
        <p class="content">{item.content}</p>
        <img
          src={process.getIconCached(
            item.status === "done" ? "GoodStatusIcon" : item.status === "failed" ? "BadStatusIcon" : "SpinnerIcon"
          )}
          alt=""
        />
      </div>
    {/each}
  {/each}
</div>

<div class="actions">
  <button class="show-log" disabled={!$working && !$done} onclick={() => process.toggleLog()}
    >{$showLog ? "Hide" : "Show"} log</button
  >
  <button class="cancel" disabled={$working || $done} onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={$working && !$done} onclick={() => process.mainAction()}
    >{$done ? "Finish" : "Update"}</button
  >
</div>
