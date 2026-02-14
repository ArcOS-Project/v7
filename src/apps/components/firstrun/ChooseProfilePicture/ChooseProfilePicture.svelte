<script lang="ts">
  import type { IAppProcess } from "$interfaces/app";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import { Daemon } from "$ts/daemon";

  const { process }: { process: IAppProcess } = $props();
  const { userPreferences } = process;
</script>

<div class="top">
  <h1>Choose profile picture</h1>
  <p>What do you want to be?</p>
  <div class="profile-picture-grid">
    {#each Object.values(ProfilePictures) as pfp, i}
      <button
        class="picture-option"
        onclick={() => Daemon?.preferencesCtx?.changeProfilePicture(i + 1)}
        class:selected={$userPreferences.account.profilePicture === i + 1}
      >
        <ProfilePicture fallback={pfp} height={40} />
      </button>
    {/each}
  </div>
</div>
<div class="actions">
  <button class="suggested" onclick={() => process.closeWindow()}>Close</button>
</div>
