<script lang="ts">
  import { PersonalizationIcon } from "$ts/images/general";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;

  // TODO: user styles
</script>

<div class="centered-layout">
  <div class="header">
    <img src={PersonalizationIcon} alt="" />
    <h1>Visual settings</h1>
    <p>Fine-tune the appearance of ArcOS</p>
  </div>

  <Section caption="Effects">
    <Option caption="Reduce animations throughout ArcOS">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.visuals.noAnimations} />
    </Option>
    <Option caption="Disable window transparency">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.visuals.noGlass} />
    </Option>
    <Option caption="Remove rounded corners">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.visuals.sharpCorners} />
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
        disabled={!$userPreferences.shell.customStyle.enabled}
        onclick={() => process.showSlide("visuals_userStyles")}
      ></button>
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.customStyle.enabled} />
    </Option>
  </Section>
</div>
