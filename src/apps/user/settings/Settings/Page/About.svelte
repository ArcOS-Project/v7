<script lang="ts">
  import { Logo } from "$ts/branding";
  import { ArcOSVersion, BETA } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();
</script>

<img src={Logo()} alt="ArcOS" />
<h1>ArcOS <span class="colored">v7</span></h1>

{#if BETA}
  <span class="beta-pill">BETA</span>
{/if}

<p>
  Thank you for using ArcOS! I'm working really hard to give you the best experience possible. Want to learn more about ArcOS? Go
  ahead and visit our GitHub organization, there's some useful stuff there.
</p>

<!-- svelte-ignore a11y_invalid_attribute -->
<p class="contact">
  Want to contact me? <a href="mailto:izaak.kuipers@gmail.com">Here you go</a>.
</p>

<p class="version">
  <span>
    v{ArcOSVersion}-{ArcMode()} ({ArcBuild()})
  </span>
  <button class="link" onclick={() => process.viewLicense()}>License</button>
</p>
