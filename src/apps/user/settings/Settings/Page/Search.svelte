<script lang="ts">
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("ArcFindIcon")} alt="" />
    <h1>ArcFind options</h1>
    <p>The search functionality of ArcOS</p>
  </div>
  {#if !process.safeMode}
    <Section caption="Options">
      <!-- <Option caption="Include settings pages">
      <input
        type="checkbox"
        class="switch"
        bind:checked={$userPreferences.searchOptions.includeSettingsPages}
      />
    </Option> -->
      <Option caption="Include apps">
        <input type="checkbox" class="switch" bind:checked={$userPreferences.searchOptions.includeApps} />
      </Option>
      <Option caption="Include shutdown, logoff and restart">
        <input type="checkbox" class="switch" bind:checked={$userPreferences.searchOptions.includePower} />
      </Option>
      <Option caption="Exclude shortcuts">
        <input type="checkbox" class="switch" bind:checked={$userPreferences.searchOptions.excludeShortcuts} />
      </Option>
    </Section>
    <Section caption="Filesystem">
      <Option caption="Search the filesystem">
        <input type="checkbox" class="switch" bind:checked={$userPreferences.searchOptions.includeFilesystem} />
      </Option>
      <Option caption="Cache the filesystem index">
        <input
          type="checkbox"
          class="switch"
          bind:checked={$userPreferences.searchOptions.cacheFilesystem}
          disabled={!$userPreferences.searchOptions.includeFilesystem}
        />
      </Option>
    </Section>
    <Section caption="Apps">
      {#if !$userPreferences.shell.visuals.showHiddenApps}
        <Option caption="Hidden apps">
          <input type="checkbox" class="switch" bind:checked={$userPreferences.searchOptions.showHiddenApps} />
        </Option>
      {:else}
        <Option caption="Hidden apps (enabled system-wide)">
          <input type="checkbox" class="switch" checked disabled />
        </Option>
      {/if}
      <Option caption="Third-party apps">
        <input type="checkbox" class="switch" bind:checked={$userPreferences.searchOptions.showThirdPartyApps} />
      </Option>
    </Section>
  {:else}
    <Section>
      <Option caption="ArcFind is disabled in Safe Mode" image={process.getIconCached("WarningIcon")}></Option>
    </Section>
  {/if}
</div>
