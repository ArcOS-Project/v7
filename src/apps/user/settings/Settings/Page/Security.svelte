<script lang="ts">
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;

  let showDangerZone = $state(false);

  async function togglePassword(e: MouseEvent) {
    if (!$userPreferences.security.noPassword) {
      e.preventDefault();

      const elevated = await process.elevate("disableSecurityPassword");

      if (!elevated) return;

      $userPreferences.security.noPassword = true;
    }
  }

  async function turnOff() {
    if ($userPreferences.security.disabled) {
      $userPreferences.security.disabled = false;
    } else {
      const elevated = await process.elevate("turnOffSysSec");

      if (!elevated) return;

      $userPreferences.security.disabled = true;
    }
  }
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("SecurityMediumIcon")} alt="" />
    <h1>Security Center</h1>
    <p>Manage the security of ArcOS</p>
  </div>

  <Section caption="Options">
    <Option caption="Don't require password for approving">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.security.noPassword} onclick={togglePassword} />
    </Option>
    <Option caption="Reject all elevation requests">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.security.lockdown} />
    </Option>
    <Option caption="Restrict changes to system folders">
      <input type="checkbox" class="switch" bind:checked={$userPreferences.security.restrictSystemFolders} />
    </Option>
  </Section>
  <Section caption="Danger Zone">
    <Option
      className="danger-zone {$userPreferences.security.disabled ? 'disabled' : ''}"
      image={process.getIconCached($userPreferences.security.disabled ? "SecurityLowIcon" : "SecurityHighIcon")}
      caption="Turn {$userPreferences.security.disabled ? 'on' : 'off'} system security"
      onclick={() => (showDangerZone = !showDangerZone)}
    >
      {#if !showDangerZone}
        <span class="lucide icon-chevron-down"></span>
      {:else}
        <span class="lucide icon-chevron-up"></span>
      {/if}
    </Option>
    {#if showDangerZone}
      <div class="danger-zone-content">
        {#if $userPreferences.security.disabled}
          <p>
            System security is disabled! It's recommended that you leave it enabled to prevent unwanted elevated operations from
            running without your permission.
          </p>
        {:else}
          <p>
            Turning off system security will allow any unwanted operations from running without your permission. We recommend that
            you leave system security <b>Enabled</b>.
          </p>
        {/if}
        <button class="disable" onclick={turnOff}>
          <img src={process.getIconCached("ElevationIcon")} alt="" />
          <span>
            {#if $userPreferences.security.disabled}
              Turn on...
            {:else}
              Turn off...
            {/if}
          </span>
        </button>
      </div>
    {/if}
  </Section>
</div>
