<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  
  const { process }: { process: IFileManagerRuntime } = $props();
</script>

<div class="splash">
  <img src={process.getIconCached("FileManagerIcon")} alt="" />
  <Spinner height={30} />
</div>
