<script lang="ts">
  import { onMount } from "svelte";
  import type { OverlayRuntime } from "../../overlay";

  const { process }: { process: OverlayRuntime } = $props();
  const { userPreferences } = process;

  let wallpaper = $state("");
  let valid = $state(false);

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      if (typeof v.account.loginBackground !== "string" || !v.account.loginBackground.startsWith("http")) return;

      wallpaper = v.account.loginBackground;

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

    $userPreferences.account.loginBackground = wallpaper;
    process.closeWindow();
  }

  function cancel() {
    process.closeWindow();
  }
</script>

<div class="top">
  <div class="left">
    <img src={valid ? wallpaper : process.getIconCached("PasswordIcon")} alt="" />
  </div>
  <div class="right">
    <h1>Login Background</h1>
    <p>Enter the URL you wish to use as your login wallpaper:</p>
    <input type="url" bind:value={wallpaper} oninput={check} onkeydown={check} placeholder="https://example.com/image.png" />
  </div>
</div>
<div class="bottom">
  <button onclick={cancel}>Cancel</button>
  <button class="suggested" disabled={!valid} onclick={apply}>Apply</button>
</div>
