<script lang="ts">
  import { StoreItemIcon } from "$ts/distrib/util";
  import { UpdateIcon } from "$ts/images/general";
  import { GoodStatusIcon } from "$ts/images/status";
  import { Plural } from "$ts/util";
  import type { MultiUpdateGuiRuntime } from "./runtime";
  import { StateIconTranslations } from "./types";

  const { process }: { process: MultiUpdateGuiRuntime } = $props();

  const { status, working, done, errored, currentPackage } = process;
</script>

<div class="header">
  <img src={$working && $currentPackage ? StoreItemIcon($currentPackage) : $done ? GoodStatusIcon : UpdateIcon} alt="" />
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
        {#if $currentPackage}
          By {$currentPackage.user?.displayName || $currentPackage.user?.username || $currentPackage.pkg.author}
        {:else}
          Loading...
        {/if}
      {:else if $done}
        {#if $errored.length}
          {$errored.length} {Plural("error", $errored.length)} occured
        {:else}
          All packages were updated.
        {/if}
      {:else}
        Click <b>Update</b> to begin
      {/if}
    </p>
  </div>
</div>
<div class="update-bar">
  {#each $status as node}
    <div class="node">
      <div class="bar">
        <div class="inner" style="--w: {(100 / node.max) * node.done}%;"></div>
      </div>
      <span class="lucide icon-{StateIconTranslations[node.state]} state-{node.state}"></span>
    </div>
  {/each}
</div>
<div class="actions">
  <button class="cancel" disabled={$working || $done} onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={$working && !$done} onclick={() => process.mainAction()}
    >{$done ? "Finish" : "Update"}</button
  >
</div>
