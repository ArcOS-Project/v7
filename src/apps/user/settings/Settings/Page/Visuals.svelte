<script lang="ts">
  import { KernelStack } from "$ts/env";
  import { blur } from "svelte/transition";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";
  import Themes from "./Themes.svelte";

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
    <Option caption="Window blur radius">
      <input 
        type="number" 
        class="" 
        min="1" 
        max="15" 
        step="1" 
        bind:value={$userPreferences.shell.visuals.blurRadius} 
        oninput={() => { 
          let renderer = KernelStack().renderer?.target;

          if (!renderer) throw new Error("SettingsApp: Tried to set blur radius value on renderer without renderer");

          // renderer.style.setProperty("--blur", `${$userPreferences.shell.visuals.blurRadius}px`);
          if ($userPreferences.shell.visuals.blurRadius < 1) {
            $userPreferences.shell.visuals.blurRadius = 1;
          } else if ($userPreferences.shell.visuals.blurRadius > 15) {
            $userPreferences.shell.visuals.blurRadius = 15;
          }
          
          if (isNaN($userPreferences.shell.visuals.blurRadius)) {
            $userPreferences.shell.visuals.blurRadius = 10;
          }
        }}
      />
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
