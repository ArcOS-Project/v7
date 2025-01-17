<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ComponentIcon } from "$ts/images/general";
  import { getProfilePicture, ProfilePictures } from "$ts/images/pfp";
  import type { UserPreferencesStore } from "$types/user";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";

  const {
    userPreferences,
    process,
    username,
  }: {
    userPreferences: UserPreferencesStore;
    process: ShellRuntime;
    username: string;
  } = $props();

  let pfp = $state<string>(ProfilePictures.def);

  onMount(async () => {
    pfp = getProfilePicture($userPreferences.account.profilePicture);
  });

  function onclick() {
    MessageBox(
      {
        image: ComponentIcon,
        title: "User Preferences",
        message: `<code class="block">${JSON.stringify($userPreferences, null, 2)}</code>`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      process.pid,
      true
    );
  }
</script>

<button class="user-button" {onclick}>
  <img src={pfp} alt="" />
  <span class="name">{username}</span>
</button>
