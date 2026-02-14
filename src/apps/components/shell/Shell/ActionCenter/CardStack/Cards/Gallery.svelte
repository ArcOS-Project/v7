<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon } from "$ts/daemon";
  import { Fs } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { UserPaths } from "$ts/user/store";
  import { arrayBufferToBlob } from "$ts/util/convert";
  import type { UserPreferencesStore } from "$types/user";
  import { onMount } from "svelte";

  const { userPreferences, process }: { userPreferences: UserPreferencesStore; process: IShellRuntime } = $props();

  let url = $state("");
  let errored = $state(false);
  let noImage = $state(false);
  let loading = $state(true);
  let lastValue = "";

  onMount(() => {
    const unsubscribe = userPreferences.subscribe(async (v) => {
      try {
        if (!v.shell.actionCenter.galleryImage) {
          noImage = true;
          loading = false;

          return;
        }

        if (v.shell.actionCenter.galleryImage === lastValue) return;

        lastValue = v.shell.actionCenter.galleryImage;
        noImage = false;
        errored = false;
        loading = true;

        const contents = await Fs.readFile(v.shell.actionCenter.galleryImage);

        loading = false;

        if (!contents) {
          errored = true;
          url = "";

          return;
        }

        const blob = arrayBufferToBlob(contents);
        url = URL.createObjectURL(blob);
      } catch {
        errored = true;
        loading = false;
      }
    });

    return () => unsubscribe();
  });

  async function chooseImage() {
    const [path] = await Daemon!.files!.LoadSaveDialog({
      title: "Choose an image for the gallery",
      icon: "DesktopIcon",
      startDir: UserPaths.Pictures,
      extensions: [".png", ".jpg", ".gif", ".webp", ".jpeg"],
    });

    if (!path) return;

    $userPreferences.shell.actionCenter.galleryImage = path;
  }
</script>

<div
  class="card gallery"
  style={!errored && !noImage ? `--src: url('${url}');` : ""}
  class:no-image={noImage}
  class:errored
  class:loading
  use:contextMenu={[
    [
      {
        caption: "Change image...",
        action: () => chooseImage(),
        icon: "pencil",
      },
      {
        caption: "Remove image",
        action: () => ($userPreferences.shell.actionCenter.galleryImage = ""),
        icon: "x",
      },
    ],
    process,
  ]}
>
  {#if !loading}
    {#if noImage}
      <span class="lucide icon-image"></span>
      <button onclick={chooseImage} class="link">Choose an image</button>
    {:else if errored}
      <span class="lucide icon-circle-slash"></span>
      <p>Image not found!</p>
      <button onclick={chooseImage} class="link">Change it</button>
    {/if}
  {:else}
    <Spinner height={32} />
  {/if}
</div>
