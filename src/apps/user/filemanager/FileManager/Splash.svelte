<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Spinner from "$lib/Spinner.svelte";

  const { process }: { process: IFileManagerRuntime } = $props();
</script>

<div class="splash">
  <img src={process.getIconCached("FileManagerIcon")} alt="" />
  <Spinner height={30} />
</div>
