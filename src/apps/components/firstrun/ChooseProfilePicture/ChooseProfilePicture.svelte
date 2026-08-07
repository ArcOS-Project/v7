<script lang="ts">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/env";
  import { ProfilePictures } from "$ts/images/pfp";

  const { process }: { process: IAppProcess } = $props();
  const { userPreferences } = process;
</script>

<div class="top">
  <h1>%apps.FirstRun.ChooseProfilePicture.title%</h1>
  <p>%apps.FirstRun.ChooseProfilePicture.subtitle%</p>
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
  <button class="suggested" onclick={() => process.closeWindow()}>%general.close%</button>
</div>
