<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Clock from "./SystemArea/Clock.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;
</script>

<Clock {userPreferences} />
