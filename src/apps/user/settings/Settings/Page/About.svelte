<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import AccentedLogo from "$lib/AccentedLogo.svelte";
  import Icon from "$lib/Icon.svelte";
  import { Logo } from "$ts/branding";
  import { ArcOSVersion, BETA } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";

  const { process }: { process: ISettingsRuntime } = $props();
  const { userPreferences } = process;
</script>

{#if !$userPreferences.shell.taskbar.accentedStartButton}
  <Icon icon={Logo()} />
{:else}
  <AccentedLogo width={150} height={150} />
{/if}

<h1>ArcOS <span class="colored">v7</span></h1>

{#if BETA}
  <span class="beta-pill">BETA</span>
{/if}

<p>
  Thank you for using ArcOS! We're working really hard to give you the best experience possible. Want to learn more about ArcOS?
  Go ahead and visit our GitHub organization, there's some useful stuff there.
</p>

<p class="contact">
  Want to contact us? <a href="mailto:contact@arcweb.nl">Here you go</a>.
</p>

<p class="version">
  <span>
    v{ArcOSVersion}-{ArcMode()} ({ArcBuild()})
  </span>
  <button class="link" onclick={() => process.viewLicense()}>License</button>
</p>
