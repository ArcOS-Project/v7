<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { AppProcess } from "$ts/apps/process";
  import { ProfilePictures } from "$ts/images/pfp";

  const { process }: { process: AppProcess } = $props();
  const { userPreferences, userDaemon } = process;
</script>

<div class="top">
  <h1>Choose profile picture</h1>
  <p>What do you want to be?</p>
  <div class="profile-picture-grid">
    {#each Object.values(ProfilePictures) as pfp, i}
      <button
        class="picture-option"
        onclick={() => process.userDaemon?.preferencesContext!.changeProfilePicture(i + 1)}
        class:selected={$userPreferences.account.profilePicture === i + 1}
      >
        <ProfilePicture {userDaemon} fallback={pfp} height={40} />
      </button>
    {/each}
  </div>
</div>
<div class="actions">
  <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
</div>
