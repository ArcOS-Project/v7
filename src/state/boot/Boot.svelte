<script lang="ts">
  import { onMount } from "svelte";
  import GlowingLogo from "../../lib/GlowingLogo.svelte";
  import Spinner from "../../lib/Spinner.svelte";
  import { ArcOSVersion } from "$ts/env";
  import { ArcMode } from "$ts/metadata/mode";
  import { ArcBuild } from "$ts/metadata/build";

  let status = $state<string>("");
  let progress = $state<boolean>(false);

  onMount(async () => {
    status = "Press a key or click to start";

    document.addEventListener("click", startBooting, { once: true });
    document.addEventListener("keydown", startBooting, { once: true });
  });

  async function startBooting() {
    if (progress) return;

    status = "&nbsp;";
    progress = true;
  }
</script>

<GlowingLogo />

<div class="bottom">
  <Spinner height={30} stopped={!progress} />
  <p class="status">{@html status}</p>
</div>

<div class="version">v{ArcOSVersion}-{ArcMode()} ({ArcBuild()})</div>
