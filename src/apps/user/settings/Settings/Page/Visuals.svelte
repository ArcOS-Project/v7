<script lang="ts">
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("PersonalizationIcon")} alt="" />
    <h1>Visual settings</h1>
    <p>Fine-tune the appearance of ArcOS</p>
  </div>

  {#if process.safeMode}
    <Section>
      <Option caption="Safe Mode - some options are disabled" image={process.getIconCached("WarningIcon")}></Option>
    </Section>
  {/if}

  <Section caption="Effects">
    <Option caption="Reduce animations throughout ArcOS">
      <input
        type="checkbox"
        class="switch"
        bind:checked={$userPreferences.shell.visuals.noAnimations}
        disabled={process.safeMode}
      />
    </Option>
    <Option caption="Disable window transparency">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.visuals.noGlass} disabled={process.safeMode} />
    </Option>
    <Option caption="Remove rounded corners">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.visuals.sharpCorners} />
    </Option>
  </Section>

  <Section caption="Windows">
    <Option caption="Enable the traffic light controls">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.visuals.trafficLights} />
    </Option>
    <Option caption="Window blur radius" className="blur-radius">
      <input type="number" class="no-arrows" min="1" max="15" step="1" bind:value={$userPreferences.shell.visuals.blurRadius} />
      <span>px</span>
    </Option>
  </Section>

  <Section caption="Additional tweaks">
    <Option caption="Show accent colors on glass surfaces">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.taskbar.colored} />
    </Option>
    <Option caption="Add your own CSS to ArcOS">
      <button
        class="lucide icon-pencil"
        aria-label="Edit custom CSS"
        title="Edit custom CSS"
        disabled={!$userPreferences.shell.customStyle.enabled && !process.safeMode}
        onclick={() => process.showSlide("visuals_userStyles")}
      ></button>
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.customStyle.enabled} />
    </Option>
    <Option caption="Change display font">
      <button onclick={() => process.spawnOverlay("userFont")}>Change...</button>
    </Option>
  </Section>
</div>
