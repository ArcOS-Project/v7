<script lang="ts">
  import { Daemon } from "$ts/server/user/daemon";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
  const { battery } = Daemon?.power! || {}!;
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("TaskbarIcon")} alt="" />
    <h1>The ArcOS Shell</h1>
    <p>The taskbar, start menu and action center</p>
  </div>

  {#if process.safeMode}
    <Section>
      <Option caption="Safe Mode - some options are disabled" image={process.getIconCached("WarningIcon")}></Option>
    </Section>
  {/if}

  <Section caption="Taskbar">
    <Option caption="Dock to screen edge">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.taskbar.docked} />
    </Option>
    <Option caption="Show window titles">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.taskbar.labels} />
    </Option>
    <Option caption="Show battery percentage">
      <input
        type="checkbox"
        class="switch"
        bind:checked={$userPreferences.shell.taskbar.batteryPercentage}
        disabled={!battery || !$battery}
      />
    </Option>
    <Option caption="Show clock...">
      <button
        class:suggested={$userPreferences.shell.taskbar.clock12hr}
        onclick={() => ($userPreferences.shell.taskbar.clock12hr = !$userPreferences.shell.taskbar.clock12hr)}>12hr</button
      >
      <button
        class:suggested={$userPreferences.shell.taskbar.clockSecs}
        onclick={() => ($userPreferences.shell.taskbar.clockSecs = !$userPreferences.shell.taskbar.clockSecs)}>Seconds</button
      >
      <button
        class:suggested={$userPreferences.shell.taskbar.clockDate}
        onclick={() => ($userPreferences.shell.taskbar.clockDate = !$userPreferences.shell.taskbar.clockDate)}>Date</button
      >
    </Option>
  </Section>
  <Section caption="Action Center">
    <Option caption="Weather location">
      <button onclick={() => process.showSlide("shell_weatherLocation")} disabled={process.safeMode}>Change...</button>
    </Option>
    <Option caption="Hide the quick settings">
      <input
        type="checkbox"
        class="switch"
        bind:checked={$userPreferences.shell.actionCenter.hideQuickSettings}
        disabled={process.safeMode}
      />
    </Option>
  </Section>
  <Section caption="Start Menu">
    <Option caption="Disable app groups">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.shell.start.noGroups} />
    </Option>
  </Section>
</div>
