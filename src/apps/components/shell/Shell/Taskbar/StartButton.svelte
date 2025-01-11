<script lang="ts">
  import { Logo } from "$ts/branding";
  import type { ShellRuntime } from "../../runtime";

  const { process }: { process: ShellRuntime } = $props();
  const { startMenuOpened } = process;

  function toggle() {
    $startMenuOpened = !$startMenuOpened;
  }
</script>

<button class="start-button" class:active={$startMenuOpened} onclick={toggle}>
  <img src={Logo()} alt="ArcOS" />
</button>
