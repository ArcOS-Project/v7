<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { Glow } from "$ts/images/branding";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("AppsIcon")} alt="" />
    <h1>Applications</h1>
    <p>Manage the apps on your system</p>
  </div>

  {#if process.safeMode}
    <Section>
      <Option caption="Safe Mode - some apps are disabled" image={process.getIconCached("WarningIcon")}></Option>
    </Section>
  {/if}

  <Section>
    <Option
      caption="Manage apps"
      onclick={() => process.showSlide("apps_manageApps")}
      image={process.getIconCached("AppsIcon")}
      chevron
    ></Option>
  </Section>

  <Section caption="Options">
    <Option caption="Show hidden apps">
      <input type="checkbox" bind:checked={$userPreferences.shell.visuals.showHiddenApps} />
    </Option>
    {#if $userPreferences.security.enableThirdParty}
      <Option
        caption="Disable third-party apps"
        chevron
        image={process.getIconCached("ElevationIcon")}
        onclick={() => Daemon?.apps?.disableThirdParty()}
      ></Option>
    {/if}
  </Section>

  {#if !$userPreferences.security.enableThirdParty}
    <Section className="third-party">
      <img src={Glow} alt="" />
      <div>
        <h1>Enable third-party apps</h1>
        <p>Click the button to allow third-party applications to run on your ArcOS account.</p>
        <button class="suggested" onclick={() => Daemon?.apps?.enableThirdParty()}>Enable Third-party</button>
      </div>
    </Section>
  {/if}
</div>
