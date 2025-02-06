<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import { arrayToBlob } from "$ts/fs/convert";
  import type { UserPreferencesStore } from "$types/user";
  import Spinner from "../../../../../../../lib/Spinner.svelte";

  const {
    userPreferences,
    process,
  }: { userPreferences: UserPreferencesStore; process: ShellRuntime } =
    $props();

  let url = $state("");
  let errored = $state(false);
  let noImage = $state(false);
  let loading = $state(true);
  let lastValue = "";

  $effect(() => {
    const unsubscribe = userPreferences.subscribe(async (v) => {
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

      const contents = await process.fs.readFile(
        v.shell.actionCenter.galleryImage
      );

      loading = false;

      if (!contents) {
        errored = true;
        url = "";

        return;
      }

      const blob = arrayToBlob(contents);
      url = URL.createObjectURL(blob);
    });

    return () => unsubscribe();
  });
</script>

<div
  class="card gallery"
  style={!errored && !noImage ? `--src: url('${url}');` : ""}
  class:no-image={noImage}
  class:errored
  class:loading
>
  {#if !loading}
    {#if noImage}
      <span class="lucide icon-image"></span>
      <button>Choose an image</button>
    {:else if errored}
      <span class="lucide icon-circle-slash"></span>
      <p>Image not found!</p>
      <button>Change it</button>
    {/if}
  {:else}
    <Spinner height={32} />
  {/if}
</div>
