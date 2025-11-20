<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { FirstRunRuntime } from "../../runtime";

  const { process }: { process: FirstRunRuntime } = $props();
</script>

<ProfilePicture height={84} />
<h1>Choose a profile picture</h1>
<p>Do you want to upload or pick a profile picture?</p>
