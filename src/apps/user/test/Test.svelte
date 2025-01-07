<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import type { TestAppRuntime } from "./runtime";

  const { safe }: AppComponentProps<TestAppRuntime> = $props();

  function crash() {
    throw new Error("bruh");
  }

  function crashOS() {
    (window as any) = undefined;
  }
</script>

<button onclick={safe(crash)}>Crash app</button>
<button onclick={crashOS}>Crash OS</button>
