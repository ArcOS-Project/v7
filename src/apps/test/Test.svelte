<script lang="ts">
  import type { AppComponentProps } from "../../types/app";
  import type { TestAppRuntime } from "./runtime";

  const { windowTitle }: AppComponentProps<TestAppRuntime> = $props();

  windowTitle.set("this)");
</script>

test

{$windowTitle}
