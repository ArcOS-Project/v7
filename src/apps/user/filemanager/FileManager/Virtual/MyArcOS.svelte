<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";
  import Drives from "./MyArcOS/Drives.svelte";
  import UserPaths from "./MyArcOS/UserPaths.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<Drives {process} />
<UserPaths {process} />
