<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { ShareListGuiRuntime } from "./runtime";

  const { process }: { process: ShareListGuiRuntime } = $props();
  const { joinedShares, ownedShares, selectedShare, selectedIsOwn, selectedIsMounted, loading } = process;
</script>

<div class="header">
  <h1>
    Your Shared Drives
    <button
      class="lucide icon-rotate-cw refresh"
      class:loading={$loading}
      disabled={$loading}
      onclick={() => process.start()}
      aria-label="Refresh"
      title="Refresh list"
    ></button>
  </h1>
  <p>These are the shares you've created or joined</p>
</div>
<div class="listing" class:loading={$loading}>
  {#if !$loading}
    {#if $joinedShares.length}
      <section>
        <h1>Joined shares</h1>
        <div class="shares">
          {#each $joinedShares as share (share._id)}
            <button onclick={() => ($selectedShare = share._id)} class:selected={$selectedShare === share._id}>
              <span class="lucide icon-network"></span>
              <p>
                <span class="name">{share.shareName}</span>
                <span class="owner">&mdash; {share.ownerName}</span>
              </p>
            </button>
          {/each}
        </div>
      </section>
    {/if}
    {#if $ownedShares.length}
      <section>
        <h1>Your shares</h1>
        <div class="shares">
          {#each $ownedShares as share (share._id)}
            <button onclick={() => ($selectedShare = share._id)} class:selected={$selectedShare === share._id}>
              <span class="lucide icon-network"></span>
              <p>
                <span class="name">{share.shareName}</span>
                <span class="owner">&mdash; {process.username}</span>
              </p>
            </button>
          {/each}
        </div>
      </section>
    {/if}
  {:else}
    <Spinner height={32} />
  {/if}
</div>
<div class="actions">
  <button class="create" onclick={() => process.createShare()}>Create...</button>

  {#if $selectedShare && !$loading}
    {#if $selectedIsOwn}
      <button class="manage" onclick={() => process.manageShare()}>Manage</button>
    {:else}
      <button class="leave" onclick={() => process.leaveShare()}>Leave</button>
      <button class="mount" onclick={() => process.mountShare()}>{$selectedIsMounted ? "Unmount" : "Mount"}</button>
    {/if}
    <button class="manage" onclick={() => process.openShare()} disabled={!$selectedIsMounted}>Open</button>
    <div class="sep"></div>
  {/if}
  <button class="suggested" onclick={() => process.closeWindow()}>Done</button>
</div>
