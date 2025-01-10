<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import type { ShellRuntime } from "./runtime";
  import Taskbar from "./Shell/Taskbar.svelte";

  const { process }: AppComponentProps<ShellRuntime> = $props();
  const { userPreferences } = process;
</script>

<Taskbar {process} />
