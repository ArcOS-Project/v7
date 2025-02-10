<script lang="ts">
  import { ProfilePictures } from "$ts/images/pfp";
  import type { UserPreferencesStore } from "$types/user";
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

  const { userDaemon } = process;

  let pfp = $state<string>(ProfilePictures.def);

  $effect(() => {
    getPfp();
  });

  async function getPfp() {
    pfp =
      (await userDaemon?.getProfilePicture(
        $userPreferences.account.profilePicture!
      )) || ProfilePictures.pfp3;
  }

  function onclick() {
    process.spawnApp("systemSettings", process.pid);
  }
</script>

<button class="user-button" {onclick}>
  <img src={pfp} alt="" />
  <span class="name">
    {username
      ? $userPreferences.account.displayName || username
      : "ERR_NO_USER"}
  </span>
</button>
