<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import { Logo } from "$ts/branding";

  const { process }: { process: IShellRuntime } = $props();
  const { startMenuOpened } = process;

  function toggle() {
    $startMenuOpened = !$startMenuOpened;
  }
</script>

<button class="start-button" class:active={$startMenuOpened} onclick={toggle}>
  <img src={Logo()} alt="ArcOS" />
</button>
