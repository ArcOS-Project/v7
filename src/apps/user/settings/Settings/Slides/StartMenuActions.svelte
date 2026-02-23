<script lang="ts">
  import { StartMenuActions } from "$apps/components/shell/store";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;

  function toggle(id: string, e: MouseEvent) {
    if (!$userPreferences.shell.start.actions.includes(id)) $userPreferences.shell.start.actions.push(id);
    else $userPreferences.shell.start.actions.splice($userPreferences.shell.start.actions.indexOf(id), 1);

    $userPreferences = $userPreferences;
    (e.target as HTMLInputElement).checked = $userPreferences.shell.start.actions.includes(id);

    return false;
  }
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("StartMenuIcon")} alt="" />
    <h1>Start menu actions</h1>
    <p>What actions would you like to show?</p>
  </div>
  <Section caption="">
    {#each Object.entries(StartMenuActions) as [id, action] (id)}
      <Option caption={action.caption} icon={action.icon}>
        <input
          type="checkbox"
          class="switch"
          onclick={(e) => toggle(id, e)}
          checked={$userPreferences.shell.start.actions.includes(id)}
        />
      </Option>
    {/each}
  </Section>
</div>
