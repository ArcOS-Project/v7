<script lang="ts">
  import { PasswordIcon, SecureIcon, WaveIcon } from "$ts/images/general";
  import { LogoutIcon } from "$ts/images/power";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";
  import Header from "./Account/Header.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userInfo, preferences: userPreferences } = process.userDaemon!;

  // TODO: rename account slide
  // TODO: change email slide + backend impl
  // TODO: change password slide
  // TODO: log out everywhere
</script>

<div class="centered-layout">
  <Header {userInfo} {userPreferences} userDaemon={process.userDaemon!} />

  <Section>
    <Option
      caption="Rename your account"
      image={SecureIcon}
      chevron
      onclick={() => process.spawnOverlay("changeUsername")}
    />
    <Option
      caption="Change your password"
      image={PasswordIcon}
      chevron
      onclick={() => process.spawnOverlay("changePassword")}
    />
  </Section>

  <Section>
    <Option
      caption="View login activity"
      image={WaveIcon}
      chevron
      onclick={() => process.loginActivity()}
    ></Option>
    <Option
      caption="Log out everywhere"
      image={LogoutIcon}
      chevron
      onclick={() => process.logOutEverywhere()}
    ></Option>
  </Section>
</div>
