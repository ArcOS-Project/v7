<script lang="ts">
  import type { INewLoginAppRuntime } from "$interfaces/runtimes/INewLoginAppRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";

  let { process }: { process: INewLoginAppRuntime } = $props();
  const { Persistence } = process;
</script>

{#if $Persistence.users?.length}
  <div class="user-selector">
    {#each $Persistence.users as user (user.userId)}
      <div class="user-option" class:selected={$Persistence.lastUserId === user.userId}>
        <button class="trigger" onclick={() => process.SelectUser(user.userId)}>
          <ProfilePicture height={48} fallback={user.profilePictureUrl} />
          <div class="info">
            <h1>{user.displayName}</h1>
            <p class="role">{user.administrator ? "Administrator" : "ArcOS User"}</p>
          </div>
        </button>
        <button
          class="delete lucide icon-x"
          title="Remove user"
          aria-label="Remove user"
          onclick={() => process.RemoveUser(user.userId)}
        ></button>
      </div>
    {/each}
    <div class="user-option add-user" class:selected={$Persistence.lastUserId === ""}>
      <button class="trigger" onclick={() => process.SelectUser("")}>
        <span class="lucide icon-plus"></span>
        <div class="info">
          <h1>Add user...</h1>
        </div>
      </button>
    </div>
  </div>
{/if}
