<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { UserPaths } from "$ts/server/user/store";
  import type { FolderEntry } from "$types/fs";
  import type { UserPreferencesStore } from "$types/user";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "../../runtime";
  import UserButton from "../Folders/UserButton.svelte";

  const {
    process,
    userPreferences,
    username,
  }: {
    process: ShellRuntime;
    userPreferences: UserPreferencesStore;
    username: string;
  } = $props();

  let dirs: FolderEntry[] = $state([]);

  onMount(() => {
    process.systemDispatch.subscribe<string>("fs-flush-folder", (path) => {
      if (!path) return;

      if (path.startsWith("U:") && path.split("/").length == 1) {
        update();
      }
    });

    update();
  });

  async function update() {
    try {
      const root = await process.fs.readDir(UserPaths.Home);

      if (!root) return;

      dirs = root?.dirs;
    } catch {}
  }
</script>

<div class="folders">
  <UserButton {userPreferences} {username} {process} />
  <div class="content">
    {#each dirs as dir}
      <button
        class="folder"
        data-contextmenu="startmenu-folder"
        use:contextProps={[dir.name]}
        onclick={() => process.spawnApp("fileManager", process.pid, `${UserPaths.Home}/${dir.name}`)}
      >
        <img src={process.getIconCached("FolderIcon")} alt="" />
        <span class="name">{dir.name}</span>
      </button>
    {/each}
  </div>
</div>
