<script lang="ts">
  import type { InitialSetupRuntime } from "../../runtime";

  const { process }: { process: InitialSetupRuntime } = $props();
</script>

<div class="fresh-deployment">
  <h1>%freshDeployment.title%</h1>
  <p class="message">%freshDeployment.message%</p>
  <ul>
    {#each Object.entries(process.server?.serverInfo!) as [key, value]}
      <li><b>{key}</b>: <code>{JSON.stringify(value)}</code></li>
    {/each}
  </ul>
  <p class="note">%freshDeployment.note%</p>
</div>
