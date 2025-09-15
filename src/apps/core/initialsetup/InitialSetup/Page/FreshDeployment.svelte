<script lang="ts">
  import type { InitialSetupRuntime } from "../../runtime";

  const { process }: { process: InitialSetupRuntime } = $props();
</script>

<div class="fresh-deployment">
  <h1>Fresh deployment</h1>
  <p class="message">
    It appears this ReArc deployment is fresh. Before continuing, please make sure that that's supposed to be the case. If it is,
    click <b>Next</b>. The user you're about to create is considered user #0, and will be set up as a God Admin by default. The
    owner of this account is then automatically seen as the owner of the server. Also, please check the server configuration:
  </p>
  <ul>
    {#each Object.entries(process.server?.serverInfo!) as [key, value]}
      <li><b>{key}</b>: <code>{JSON.stringify(value)}</code></li>
    {/each}
  </ul>
  <p class="note">
    <b>Note:</b> <code>disableRegistration</code> is ignored for the first user. This configuration option will be retained once the
    first user has been created.
  </p>
</div>
