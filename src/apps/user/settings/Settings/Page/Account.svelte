<script lang="ts">
  import {
    PasswordIcon,
    RoturIcon,
    SecureIcon,
    WaveIcon,
  } from "$ts/images/general";
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
  <Header {userInfo} {userPreferences} />

  <Section>
    <Option caption="Rename your account" image={SecureIcon} chevron />
    <Option caption="Change your password" image={PasswordIcon} chevron />
    <Option caption="Manage Rotur..." image={RoturIcon} chevron />
  </Section>

  <Section>
    <Option
      caption="View login activity"
      image={WaveIcon}
      chevron
      onclick={() => process.loginActivity()}
    ></Option>
    <Option caption="Log out everywhere" image={LogoutIcon} chevron></Option>
  </Section>
</div>
