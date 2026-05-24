<script lang="ts">
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
  import Spinner from "$lib/Spinner.svelte";
=======
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Spinner from "$lib/Spinner.svelte";

  const { process }: { process: IFileManagerRuntime } = $props();
>>>>>>> development
</script>

<div class="splash">
  <Icon icon="FileManagerIcon" />
  <Spinner height={30} />
</div>
