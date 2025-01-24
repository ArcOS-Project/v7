<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { onFolderChange } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import UserButton from "./Folders/UserButton.svelte";

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

  $effect(() => {
    onFolderChange("", update);
  });

  async function update() {
    const root = await process.fs.readDir("");

    if (!root) return;

    dirs = root?.dirs;
  }

  async function openFolder(name: string) {
    // TODO: file manager + open the folder in the file manager
    const contents = await process.fs.readDir(name);

    MessageBox(
      {
        title: name,
        image: FolderIcon,
        message: `<code class="block">${JSON.stringify(contents, null, 2)}</code>`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      process.pid,
      true
    );
  }
</script>

<div class="folders">
  <UserButton {userPreferences} {username} {process} />
  <div class="content">
    {#each dirs as dir}
      <button class="folder" onclick={() => openFolder(dir.name)}>
        <img src={FolderIcon} alt="" />
        <span class="name">{dir.name}</span>
      </button>
    {/each}
  </div>
</div>
