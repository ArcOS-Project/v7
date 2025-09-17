<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { FileManagerRuntime } from "../runtime";
  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="splash">
  <img src={process.getIconCached("FileManagerIcon")} alt="" />
  <Spinner height={30} />
</div>
