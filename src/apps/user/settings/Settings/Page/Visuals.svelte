<script lang="ts">
  import type { SettingsRuntime } from "../../runtime";

  const { process }: { process: SettingsRuntime } = $props();
</script>

{process.pid}
