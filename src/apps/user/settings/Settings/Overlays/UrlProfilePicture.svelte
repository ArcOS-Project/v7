<script lang="ts">
  import type { ISettingsOverlayRuntime } from "$interfaces/runtimes/ISettingsOverlayRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import { Daemon } from "$ts/env";
  import { onMount } from "svelte";

  const { process }: { process: ISettingsOverlayRuntime } = $props();
  const { userPreferences } = process;

  let pfp = $state("");
  let valid = $state(false);

  onMount(() => {
    const sub = userPreferences.subscribe((v) => {
      if (typeof v.account.profilePicture !== "string" || !v.account.profilePicture.startsWith("http")) return;

      pfp = v.account.profilePicture;

      check();
    });

    return () => sub();
  });

  async function check() {
    valid = await checkImage(pfp);
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

    Daemon?.preferencesCtx?.changeProfilePicture(pfp);
    process.closeWindow();
  }

  function cancel() {
    process.closeWindow();
  }
</script>

<div class="top">
  <div class="left">
    <img src={valid ? pfp : process.getIconCached("AccountIcon")} alt="" />
  </div>
  <div class="right">
    <h1>Change Profile Picture</h1>
    <p>Enter the URL you wish to use as your profile picture:</p>
    <input type="url" bind:value={pfp} oninput={check} onkeydown={check} placeholder="https://example.com/image.png" />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={cancel}>Cancel</ActionButton>
    <ActionButton suggested disabled={!valid} onclick={apply}>Apply</ActionButton>
  {/snippet}
</ActionBar>
