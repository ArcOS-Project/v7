<script lang="ts">
  import type { AppComponentProps } from "../../types/app";
  import type { TestAppRuntime } from "./runtime";

  const { safe, windowTitle }: AppComponentProps<TestAppRuntime> = $props();

  windowTitle.set("this)");
  function crash() {
    throw new Error("bruh");
  }
</script>

<button onclick={safe(crash)}>Crash</button>
