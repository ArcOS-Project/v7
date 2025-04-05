<script lang="ts">
  import { ShareIcon } from "$ts/images/filesystem";
  import type { ShareMgmtGuiRuntime } from "./runtime";

  const { process }: { process: ShareMgmtGuiRuntime } = $props();
  const { members, info, selectedMember, myShare } = process;
</script>

{#if info}
  <div class="header">
    <img src={ShareIcon} alt="" />
    <div>
      <h1>
        {info.shareName}
        {#if info.locked}
          <span class="lucide icon-triangle-alert"></span>
        {/if}
      </h1>
      <p>Share of {info.ownerName}</p>
    </div>
    <div class="actions">
      <button
        class="lucide icon-rectangle-ellipsis"
        aria-label="Change share password"
        disabled={!myShare}
        onclick={() => process.spawnOverlay("changePassword")}
      ></button>
      <button
        class="lucide icon-pencil-line"
        aria-label="Rename share"
        disabled={!myShare}
        onclick={() => process.spawnOverlay("renameShare")}
      ></button>
    </div>
  </div>
  <div class="user-list">
    {#if Object.entries($members).length}
      <section>
        <h1>Users</h1>
        <div class="users">
          {#each Object.entries($members) as [id, username] (id)}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="user" class:selected={$selectedMember === id} onclick={() => ($selectedMember = id)}>
              <span class="lucide icon-user"></span>
              <span>{username}</span>
              {#if myShare}
                <button class="lucide icon-unlink delete" aria-label="Kick user" onclick={() => process.kickUser(id, username)}
                ></button>
              {/if}
            </div>
          {/each}
        </div>
      </section>
    {:else}
      <div class="no-members">
        <span class="lucide icon-circle-slash"></span>
        <p>This share has no members!</p>
      </div>
    {/if}
  </div>
  <div class="actions">
    <button class="delete" disabled={!myShare} onclick={() => process.deleteShare()}>Delete share</button>
    <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
  </div>
{/if}
