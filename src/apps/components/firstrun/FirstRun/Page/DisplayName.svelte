<script lang="ts">
  import type { IFirstRunRuntime } from "$interfaces/runtimes/IFirstRunRuntime";

  let { process }: { process: IFirstRunRuntime } = $props();
  const { displayName } = process;
</script>

<h1>What's your name?</h1>
<p>
  Would you like to add a custom Display Name alongside your username? This is optional and can be changed at any time in
  Settings.
</p>

<input type="text" class="display-name" placeholder="e.g. John Smith" bind:value={$displayName} />
