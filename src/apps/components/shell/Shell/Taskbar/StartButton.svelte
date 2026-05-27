<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import AccentedLogo from "$lib/AccentedLogo.svelte";
  import Icon from "$lib/Icon.svelte";
  import { Logo } from "$ts/branding";

  const { process }: { process: IShellRuntime } = $props();
  const { startMenuOpened, userPreferences } = process;

  function toggle() {
    $startMenuOpened = !$startMenuOpened;
  }
</script>

<button class="start-button" class:active={$startMenuOpened} onclick={toggle}>
  {#if !$userPreferences.shell.taskbar.accentedStartButton}
    <Icon icon={Logo()} />
  {:else}
    <AccentedLogo width={30} height={30} />
  {/if}
</button>
