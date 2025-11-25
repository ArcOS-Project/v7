<script lang="ts">
  import { Logo } from "$ts/branding";
  import { ArcOSVersion, BETA, IsMobile } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import type { AppComponentProps } from "$types/app";
  import { onMount } from "svelte";
  import Spinner from "../../../lib/Spinner.svelte";
  import type { BootScreenRuntime } from "./runtime";

  const { process }: AppComponentProps<BootScreenRuntime> = $props();
  const { status, progress } = process;

  onMount(() => {
    if ($IsMobile) return;
    process.begin();
  });
</script>

<img src={Logo()} alt="ArcOS" />

<div class="bottom">
  <Spinner height={30} stopped={!$progress} />
  <p class="status">{@html $status}</p>
</div>

<div class="version">
  <span class="string">
    v{ArcOSVersion}-{ArcMode()} ({ArcBuild()})
  </span>
  {#if BETA}
    <span class="beta-pill">BETA</span>
  {/if}
</div>
