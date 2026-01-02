<script lang="ts">
  import { Logo } from "$ts/branding";
  import { ArcOSVersion, BETA, Server } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import type { AppComponentProps } from "$types/app";
  import { onMount } from "svelte";
  import Spinner from "../../../lib/Spinner.svelte";
  import type { BootScreenRuntime } from "./runtime";

  const { process }: AppComponentProps<BootScreenRuntime> = $props();
  const { status, progress } = process;

  let url = $state<string>();

  onMount(() => {
    process.begin();

    try {
      url = URL.parse(Server.url!)!.hostname;
    } catch {
      url = "no server";
    }
  });
</script>

<div class="top">
  <div class="url">
    {url}
  </div>
  <div class="keys">
    <div class="row">
      <div class="key">F8</div>
      <div class="description">Safe mode</div>
    </div>
    <div class="row">
      <div class="key">F4</div>
      <div class="description">Change server</div>
    </div>
  </div>
</div>

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
