<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/env";
  import { ProfilePictures } from "$ts/images/pfp";
  import { onMount } from "svelte";

  const { process }: { process: ISettingsRuntime } = $props();
  const { userPreferences, slideVisible } = process;

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
      onclick={() => Daemon?.preferencesCtx?.changeProfilePicture(i + 1)}
      class:selected={$userPreferences.account.profilePicture === i + 1}
    >
      <ProfilePicture fallback={pfp} height={40} />
    </button>
  {/each}
</div>
