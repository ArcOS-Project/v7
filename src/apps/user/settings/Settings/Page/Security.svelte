<script lang="ts">
  import {
    ElevationIcon,
    SecurityHighIcon,
    SecurityMediumIcon,
  } from "$ts/images/general";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;

  let showDangerZone = $state(false);
</script>

<div class="centered-layout">
  <div class="header">
    <img src={SecurityMediumIcon} alt="" />
    <h1>Security Center</h1>
    <p>Manage the security of ArcOS</p>
  </div>

  <Section caption="Options">
    <Option caption="Don't require password for approving">
      <input type="checkbox" class="switch" />
    </Option>
    <Option caption="Reject all elevation requests">
      <input
        type="checkbox"
        class="switch"
        bind:checked={$userPreferences.security.lockdown}
      />
    </Option>
  </Section>
  <Section caption="Danger Zone">
    <Option
      className="danger-zone"
      image={SecurityHighIcon}
      caption="Turn off system security"
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
        <p>
          Turning off system security will allow any unwanted operations from
          running without your permission. We recommend that you leave system
          security <b>Enabled</b>.
        </p>
        <button class="disable">
          <img src={ElevationIcon} alt="" />
          <span>Turn off...</span>
        </button>
      </div>
    {/if}
  </Section>
</div>
