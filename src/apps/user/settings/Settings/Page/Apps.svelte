<script lang="ts">
  import { AppOrigins } from "$ts/apps/store";
  import { isPopulatable } from "$ts/apps/util";
  import { maybeIconId } from "$ts/images";
  import { WarningIcon } from "$ts/images/dialog";
  import { AppsIcon } from "$ts/images/general";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
  const { buffer } = process?.appStore() || {};
</script>

<div class="centered-layout">
  <div class="header">
    <img src={AppsIcon} alt="" />
    <h1>Applications</h1>
    <p>Manage the apps on your system</p>
  </div>

  {#if process.safeMode}
    <Section>
      <Option caption="Safe Mode - some apps are disabled" image={WarningIcon}></Option>
    </Section>
  {/if}

  <Section caption="Options">
    <Option caption="Show hidden apps">
      <input type="checkbox" bind:checked={$userPreferences.shell.visuals.showHiddenApps} />
    </Option>
  </Section>
  {#if $buffer}
    {#each Object.entries(AppOrigins) as [id, name]}
      {#if $buffer!.filter((a) => a.originId === id).length > 0}
        <Section caption="{name} applications">
          {#each $buffer! as app (`${app.originId}-${app.id}-${app.metadata.name}`)}
            {#if app.originId === id && (isPopulatable(app) || $userPreferences.shell.visuals.showHiddenApps)}
              <Option
                caption={app.metadata.name}
                image={process.userDaemon?.getAppIcon(app)}
                chevron
                onclick={() => {
                  process.spawnOverlayApp("AppInfo", process.pid, app.id);
                }}
                className={!isPopulatable(app) ? "hidden" : ""}
              />
            {/if}
          {/each}
        </Section>
      {/if}
    {/each}
  {:else}
    <Section>
      <Option caption="Failed to get app list from AppStorage" image={WarningIcon}></Option>
    </Section>
  {/if}
</div>
