<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { FirstRunRuntime } from "../../runtime";

  const { process }: { process: FirstRunRuntime } = $props();
</script>

<ProfilePicture userDaemon={process.userDaemon} height={84} />
<h1>%profilePicture.title%</h1>
<p>%profilePicture.subtitle%</p>
