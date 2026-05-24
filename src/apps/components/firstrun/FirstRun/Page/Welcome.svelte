<script lang="ts">
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
  import { WaveIcon } from "$ts/images/general";
=======
  import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";
  const { process }: { process: IFirstRunRuntime } = $props();
>>>>>>> development
</script>

<Icon icon="WaveIcon" fallback={WaveIcon} />
<h1>Welcome to ArcOS!</h1>
<p>Let's customize your account.</p>
