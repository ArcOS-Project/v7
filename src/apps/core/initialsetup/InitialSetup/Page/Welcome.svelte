<script lang="ts">
  import type { IInitialSetupRuntime } from "$interfaces/runtimes/IIntialSetupRuntime";
  import AccentedLogo from "$lib/AccentedLogo.svelte";
  import ProcessPsa from "$lib/ProcessPsa.svelte";

  const { process }: { process: IInitialSetupRuntime } = $props();
</script>

<div class="hero-page">
  <AccentedLogo height={90} />
  <h1>Welcome to ArcOS!</h1>
  <p class="subtitle">We're happy to have you</p>
  <p class="message">
    Let's get you an ArcOS account. Click <b>Next</b> to get started, or
    <b>Cancel</b> to go back to the login screen.
  </p>

  <ProcessPsa {process} location="welcome" showMoreButton />
</div>
