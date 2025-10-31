<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { AppProcess } from "$ts/apps/process";
  import { ProfilePictures } from "$ts/images/pfp";

  const { process }: { process: AppProcess } = $props();
  const { userPreferences, userDaemon } = process;
</script>

<div class="top">
  <h1>%apps.FirstRun.ChooseProfilePicture.title%</h1>
  <p>%apps.FirstRun.ChooseProfilePicture.subtitle%</p>
  <div class="profile-picture-grid">
    {#each Object.values(ProfilePictures) as pfp, i}
      <button
        class="picture-option"
        onclick={() => process.userDaemon?.changeProfilePicture(i + 1)}
        class:selected={$userPreferences.account.profilePicture === i + 1}
      >
        <ProfilePicture {userDaemon} fallback={pfp} height={40} />
      </button>
    {/each}
  </div>
</div>
<div class="actions">
  <button class="suggested" onclick={() => process.closeWindow()}>%general.close%</button>
</div>
