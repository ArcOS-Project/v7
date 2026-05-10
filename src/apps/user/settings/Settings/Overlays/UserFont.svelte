<script lang="ts">
  import type { ISettingsOverlayRuntime } from "$interfaces/runtimes/ISettingsOverlayRuntime";
  import { UserFonts } from "$ts/user/store";

  const { process }: { process: ISettingsOverlayRuntime } = $props();
  const { userPreferences } = process;
</script>

<h1>Change the display font</h1>
<p>The fonts in this list are ArcOS Certified; they're known to work with ArcOS' user interface.</p>

<button
  class="reset-font"
  onclick={() => ($userPreferences.shell.visuals.userFont = "")}
  disabled={!$userPreferences.shell.visuals.userFont}
>
  <span class="lucide icon-circle-slash"></span>
  <div>
    <h1>Use default font</h1>
    <p>Nunito Sans</p>
  </div>
</button>

<div class="options">
  {#each UserFonts as font}
    <button
      class="option"
      onclick={() => ($userPreferences.shell.visuals.userFont = font)}
      style="--font: '{font}'"
      class:selected={$userPreferences.shell.visuals.userFont === font}
    >
      <span class="lucide icon-case-sensitive"></span>
      <span>{font}</span>
    </button>
  {/each}
</div>

<button class="suggested" onclick={() => process.closeWindow()}>Done</button>
