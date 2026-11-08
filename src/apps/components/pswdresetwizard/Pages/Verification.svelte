<script lang="ts">
  import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";

  let { process }: { process: IPswdResetWizardRuntime } = $props();
  const { RecoveryCode, ErrorMessage } = process;
</script>

<p class="instruction">
  We’ve sent a verification code to the email address associated with your account. Enter the code in the field below to continue:
</p>

<div class="field-wrapper">
  <h2>Verification code:</h2>
  <div class="field verification-code">
    <input type="text" placeholder="XXXXXX" bind:value={$RecoveryCode} />
  </div>
  {#if $ErrorMessage}
    <div class="error-message">
      <span class="lucide icon-circle-alert"></span>
      <span>{$ErrorMessage}</span>
    </div>
  {/if}
</div>

<p class="help">
  The verification code is valid for 15 minutes. After this period has elapsed, you can request another verification code. Only
  one code may be requested at a time.
</p>
