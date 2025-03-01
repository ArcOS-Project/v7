<script lang="ts">
  import { DesktopIcon, PasswordIcon } from "$ts/images/general";
  import { onMount } from "svelte";
  import type { OverlayRuntime } from "../../overlay";

  const { process }: { process: OverlayRuntime } = $props();
  const { userPreferences } = process;

  let wallpaper = $state("");
  let valid = $state(false);

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      if (
        typeof v.desktop.wallpaper !== "string" ||
        !v.desktop.wallpaper.startsWith("http")
      )
        return;

      wallpaper = v.desktop.wallpaper;

      check();
    });

    return () => sub();
  });

  async function check() {
    valid = await checkImage(wallpaper);
  }

  async function checkImage(url: string): Promise<boolean> {
    const img = new Image();

    img.src = url;

    return new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  function apply() {
    if (!valid) return;

    $userPreferences.desktop.wallpaper = wallpaper;
    process.closeWindow();
  }

  function cancel() {
    process.closeWindow();
  }
</script>

<div class="top">
  <div class="left">
    <img src={valid ? wallpaper : DesktopIcon} alt="" />
  </div>
  <div class="right">
    <h1>Change Wallpaper</h1>
    <p>Enter the URL you wish to use as your wallpaper:</p>
    <input
      type="url"
      bind:value={wallpaper}
      oninput={check}
      onkeydown={check}
      placeholder="https://example.com/image.png"
    />
  </div>
</div>
<div class="bottom">
  <button onclick={cancel}>Cancel</button>
  <button class="suggested" disabled={!valid} onclick={apply}>Apply</button>
</div>
