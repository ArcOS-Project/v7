<script lang="ts">
  import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";

  let { process }: { process: IPswdResetWizardRuntime } = $props();
  const { RecoveryUsername, NewPassword, ErrorMessage } = process;
</script>

<p class="instruction">
  We’re almost there, {$RecoveryUsername}! To finish off, think of a strong password for your ArcOS account. Save it in your password
  manager so that you don’t lose it.
</p>

<div class="field-wrapper">
  <h2>Enter a new password:</h2>
  <div class="field">
    <span class="lucide icon-key-round"></span>
    <input type="password" placeholder="Password" bind:value={$NewPassword} />
  </div>
  {#if $ErrorMessage}
    <div class="error-message">
      <span class="lucide icon-circle-alert"></span>
      <span>{$ErrorMessage}</span>
    </div>
  {/if}
</div>
