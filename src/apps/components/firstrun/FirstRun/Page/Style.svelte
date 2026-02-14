<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import type { FirstRunRuntime } from "../../runtime";
  import { FirstRunThemes } from "../../store";
  import type { FirstRunTheme } from "../../types";

  const { process }: { process: FirstRunRuntime } = $props();

  let selection = $state<string>("dark");

  function apply(key: string, theme: FirstRunTheme) {
    process.userPreferences.update((v) => {
      v.desktop.wallpaper = theme.configuration.wallpaper;
      v.account.loginBackground = theme.configuration.wallpaper;
      v.desktop.accent = theme.configuration.accent;
      v.desktop.theme = theme.configuration.style;

      return v;
    });

    Daemon!.renderer!.setAppRendererClasses(process.userPreferences());

    selection = key;
  }
</script>

<div class="choose-style">
  <div class="header">
    <h1>What's your style?</h1>
    <p>Pick which style suits you best. You can always change it in the Settings app.</p>
  </div>

  <div class="styles">
    {#each Object.entries(FirstRunThemes) as [key, theme]}
      <button onclick={() => apply(key, theme)} class:selected={selection === key}>
        <img src={theme.image} alt="" />
        <h1>{theme.name}</h1>
        <p>{theme.subtitle}</p>
      </button>
    {/each}
  </div>
</div>
