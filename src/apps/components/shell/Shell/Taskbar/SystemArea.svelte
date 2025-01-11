<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Clock from "./SystemArea/Clock.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;
</script>

<div class="system-area">
  <div class="tray-icons"></div>
  <Clock {userPreferences} {process} />
</div>
