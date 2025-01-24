<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Clock from "./SystemArea/Clock.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;

  // TODO: tray icons + popups
</script>

<div class="system-area">
  <div class="tray-icons"></div>
  <Clock {userPreferences} />
</div>
