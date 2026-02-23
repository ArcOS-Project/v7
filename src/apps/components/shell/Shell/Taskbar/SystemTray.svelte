<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import Clock from "./SystemArea/Clock.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;
</script>

<Clock {process} {userPreferences} />
