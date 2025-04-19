<script lang="ts">
  import { WarningIcon } from "$ts/images/dialog";
  import { ElevationIcon, PasswordIcon, SecureIcon, SecurityHighIcon, WaveIcon } from "$ts/images/general";
  import { LogoutIcon } from "$ts/images/power";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";
  import Header from "./Account/Header.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = process.userDaemon || {}!;
</script>

<div class="centered-layout">
  {#if userInfo && userPreferences}
    <Header {process} {userInfo} {userPreferences} userDaemon={process.userDaemon!} />
  {:else}
    <p class="error-text">ERR_NO_DAEMON</p>
  {/if}

  {#if process.safeMode}
    <Section>
      <Option caption="Safe Mode - some options are disabled" image={WarningIcon}></Option>
    </Section>
  {/if}

  <Section>
    <Option caption="Rename your account" image={SecureIcon} chevron onclick={() => process.spawnOverlay("changeUsername")} />
    <Option caption="Change your password" image={PasswordIcon} chevron onclick={() => process.spawnOverlay("changePassword")} />
    {#if !process.userDaemon?.userInfo.hasTotp}
      <Option
        caption="Set up two-factor authentication"
        image={ElevationIcon}
        chevron
        onclick={() => process.setup2fa()}
        disabled={process.safeMode}
      />
    {:else}
      <Option
        caption="Disable two-factor authentication"
        image={SecurityHighIcon}
        chevron
        onclick={() => process.disableTotp()}
        disabled={process.safeMode}
      />
    {/if}
  </Section>

  <Section>
    <Option caption="View login activity" image={WaveIcon} chevron onclick={() => process.loginActivity()}></Option>
    <Option caption="Log out everywhere" image={LogoutIcon} chevron onclick={() => process.logOutEverywhere()}></Option>
  </Section>
</div>
