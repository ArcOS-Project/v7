<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import LockScreen from "./LockScreen.svelte";
  import type { LoginAppRuntime } from "./runtime";

  const { process }: AppComponentProps<LoginAppRuntime> = $props();

  const { hideLockscreen } = process;
</script>

<LockScreen {hideLockscreen} />
