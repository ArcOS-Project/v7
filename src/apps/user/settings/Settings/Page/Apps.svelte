<script lang="ts">
  import { AppOrigins } from "$ts/apps/store";
  import { maybeIconId } from "$ts/images";
  import { AppsIcon } from "$ts/images/general";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { buffer } = process.userDaemon?.appStore || {};
</script>

<div class="centered-layout">
  <div class="header">
    <img src={AppsIcon} alt="" />
    <h1>Applications</h1>
    <p>Manage the apps on your system</p>
  </div>
  {#each Object.entries(AppOrigins) as [id, name]}
    {#if buffer}
      {#if $buffer!.filter((a) => a.originId === id).length > 0}
        <Section caption="{name} applications">
          {#each $buffer! as app}
            {#if app.originId === id}
              <Option
                caption={app.metadata.name}
                image={maybeIconId(app.metadata.icon)}
                chevron
                onclick={() => {
                  process.spawnOverlayApp("AppInfo", process.pid, app.id);
                }}
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
