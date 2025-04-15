<script lang="ts">
  import { AppOrigins } from "$ts/apps/store";
  import { isPopulatable } from "$ts/apps/util";
  import { maybeIconId } from "$ts/images";
  import { AppsIcon } from "$ts/images/general";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;
  const { buffer } = process.userDaemon?.appStore || {};
</script>

<div class="centered-layout">
  <div class="header">
    <img src={AppsIcon} alt="" />
    <h1>Applications</h1>
    <p>Manage the apps on your system</p>
  </div>
  <Section caption="Options">
    <Option caption="Show hidden apps">
      <input type="checkbox" bind:checked={$userPreferences.shell.visuals.showHiddenApps} />
    </Option>
  </Section>
  {#each Object.entries(AppOrigins) as [id, name]}
    {#if buffer}
      {#if $buffer!.filter((a) => a.originId === id).length > 0}
        <Section caption="{name} applications">
          {#each $buffer! as app (`${app.originId}-${app.id}-${app.metadata.name}`)}
            {#if app.originId === id && (isPopulatable(app) || $userPreferences.shell.visuals.showHiddenApps)}
              <Option
                caption={app.metadata.name}
                image={maybeIconId(app.metadata.icon)}
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
    {:else}
      <p class="error-text">ERR_NO_DAEMON</p>
    {/if}
  {/each}
</div>
