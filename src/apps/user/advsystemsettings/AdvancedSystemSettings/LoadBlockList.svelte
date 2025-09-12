<script lang="ts">
  import type { AdvSysSetRuntime } from "../runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();
  const { userPreferences } = process;
</script>

<p>
  Here you can manage what built-in app files are allowed to load. Any blocked apps will simply not exist in ArcOS' internal code.
</p>
