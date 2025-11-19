<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import { onMount } from "svelte";
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences, slideVisible, userDaemon } = process;

  onMount(() => {
    if (!$slideVisible) return;
  });
</script>

<h1>Choose profile picture</h1>
<p>What do you want to be?</p>
<div class="profile-picture-grid">
  {#each Object.values(ProfilePictures) as pfp, i}
    <button
      class="picture-option"
      onclick={() => process.userDaemon?.preferencesContext?.changeProfilePicture(i + 1)}
      class:selected={$userPreferences.account.profilePicture === i + 1}
    >
      <ProfilePicture {userDaemon} fallback={pfp} height={40} />
    </button>
  {/each}
</div>
