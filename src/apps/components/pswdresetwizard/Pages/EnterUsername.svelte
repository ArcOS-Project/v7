<script lang="ts">
  import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";

  let { process }: { process: IPswdResetWizardRuntime } = $props();
  const { RecoveryUsername, ErrorMessage } = process;
</script>

<p class="instruction">
  First, we need your username. To verify that it’s you, we’ll send an email with a verification code to the email address of your
  account.
</p>

<div class="field-wrapper">
  <h2>Enter your username:</h2>
  <div class="field">
    <span class="lucide icon-user"></span>
    <input type="text" placeholder="Username" bind:value={$RecoveryUsername} />
  </div>
  {#if $ErrorMessage}
    <div class="error-message">
      <span class="lucide icon-circle-alert"></span>
      <span>{$ErrorMessage}</span>
    </div>
  {/if}
</div>

<p class="help">
  If you forgot your username, please talk to an Administrator in the ArcOS Discord server, and we'll help you recover your
  account.
</p>
