<script lang="ts">
  import { ArcOSVersion } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import type { AppComponentProps } from "$types/app";
  import { onMount } from "svelte";
  import GlowingLogo from "../../../lib/GlowingLogo.svelte";
  import Spinner from "../../../lib/Spinner.svelte";
  import type { BootScreenRuntime } from "./runtime";

  const { process }: AppComponentProps<BootScreenRuntime> = $props();
  const { status, progress } = process;

  onMount(async () => {
    await process.begin();
  });
</script>

<GlowingLogo />

<div class="bottom">
  <Spinner height={30} stopped={!$progress} />
  <p class="status">{@html $status}</p>
</div>

<div class="version">v{ArcOSVersion}-{ArcMode()} ({ArcBuild()})</div>
