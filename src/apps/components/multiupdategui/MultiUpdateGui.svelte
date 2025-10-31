<script lang="ts">
  import UserLink from "$lib/UserLink.svelte";
  import { StoreItemIcon } from "$ts/distrib/util";
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
        : process.getIconCached("UpdateIcon")}
    alt=""
  />
  <div class="info">
    <h1>
      {#if $working}
        {#if $currentPackage}
          %title.updating({$currentPackage.pkg.name})%
        {:else}
          %title.loading%
        {/if}
      {:else if $done}
        %title.done%
      {:else}
        %title.ready%
      {/if}
    </h1>
    <p class="sub">
      {#if $working}
        {#if $currentPackage && $currentPackage.user}
          <span title={$currentPackage.user?.username || ""}>
            %generic.by% <UserLink user={$currentPackage.user} fallback={$currentPackage.pkg.author} />
          </span>
        {:else}
          %generic.loading%
        {/if}
      {:else if $done}
        {#if $errored.length}
          {$errored.length} {Plural("error", $errored.length)} occurred
        {:else}
          %allPackagesUpdated%
        {/if}
      {:else}
        %clickUpdate%
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
            %itemType.file%
          {:else if item.type === "mkdir"}
            %itemType.mkdir%
          {:else if item.type === "registration"}
            %itemType.registration%
          {:else}
            %itemType.generic%
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
    >{#if $showLog}%hideLog%{:else}%showLog%{/if}</button
  >
  <button class="cancel" disabled={$working || $done} onclick={() => process.closeWindow()}>%general.cancel%</button>
  <button class="suggested" disabled={$working && !$done} onclick={() => process.mainAction()}
    >{#if $done}%finish%{:else}%startUpdate%{/if}</button
  >
</div>
