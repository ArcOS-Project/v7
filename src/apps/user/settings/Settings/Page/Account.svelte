<script lang="ts">
  import { MessagingIcon } from "$ts/images/apps";
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
  <Header {userInfo} {userPreferences} />

  <Section>
    <Option caption="Rename your account" image={SecureIcon} chevron />
    <Option caption="Change your email address" image={MessagingIcon} chevron />
    <Option caption="Update your password" image={PasswordIcon} chevron />
  </Section>

  <Section>
    <Option
      caption="View login activity"
      image={WaveIcon}
      chevron
      onclick={() => process.showSlide("account_loginActivity")}
    ></Option>
    <Option caption="Log out everywhere" image={LogoutIcon} chevron></Option>
  </Section>
</div>
