<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";
  import Header from "./Account/Header.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = process.userDaemon || {}!;
</script>

<ProfilePicture className="backdrop" userDaemon={process.userDaemon!} height={0} />
<div class="centered-layout">
  {#if userInfo && userPreferences}
    <Header {process} {userInfo} userDaemon={process.userDaemon!} />
  {:else}
    <p class="error-text">ERR_NO_DAEMON</p>
  {/if}

  {#if process.safeMode}
    <Section>
      <Option caption="Safe Mode - some options are disabled" image={process.getIconCached("WarningIcon")}></Option>
    </Section>
  {/if}

  <Section>
    <Option
      caption="Rename your account"
      image={process.getIconCached("SecureIcon")}
      chevron
      onclick={() => process.spawnOverlay("changeUsername")}
    />
    <Option
      caption="Change your password"
      image={process.getIconCached("PasswordIcon")}
      chevron
      onclick={() => process.spawnOverlay("changePassword")}
    />
    {#if !process.userDaemon?.userInfo.hasTotp}
      <Option
        caption="Set up two-factor authentication"
        image={process.getIconCached("ElevationIcon")}
        chevron
        onclick={() => process.setup2fa()}
        disabled={process.safeMode}
      />
    {:else}
      <Option
        caption="Disable two-factor authentication"
        image={process.getIconCached("SecurityHighIcon")}
        chevron
        onclick={() => process.disableTotp()}
        disabled={process.safeMode}
      />
    {/if}
  </Section>

  <Section>
    <Option
      caption="View login activity"
      image={process.getIconCached("WaveIcon")}
      chevron
      onclick={() => process.loginActivity()}
    ></Option>
    <Option
      caption="Log out everywhere"
      image={process.getIconCached("LogoutIcon")}
      chevron
      onclick={() => process.logOutEverywhere()}
    ></Option>
    <Option
      caption="Delete ArcOS account..."
      image={process.getIconCached("TrashIcon")}
      chevron
      onclick={() => process.userDaemon?.accountContext?.deleteAccount()}
    ></Option>
  </Section>
</div>
