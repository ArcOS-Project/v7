<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { TimeFrames } from "$ts/user/store";
  import { groupByTimeFrame } from "$ts/util";
  import type { LoginActivity } from "$types/activity";
  import { onMount } from "svelte";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Activity from "./LoginActivity/Activity.svelte";

  const { process }: { process: SettingsRuntime } = $props();

  let groups: Record<string, LoginActivity[]> = $state({});

  onMount(() => {
    getActivity();
  });

  async function getActivity() {
    groups = groupByTimeFrame<LoginActivity>(((await Daemon?.activity?.getLoginActivity()) || []).reverse(), "createdAt");
  }
</script>

<div class="centered-layout">
  <div class="header">
    <img src={process.getIconCached("SecurityLowIcon")} alt="" />
    <h1>Account Activity</h1>
    <p>View the security activity on your account.</p>
  </div>

  {#each Object.entries(groups) as [when, activities]}
    {#if activities.length}
      <Section caption={TimeFrames[when]}>
        {#each activities as activity}
          <Activity {activity} />
        {/each}
      </Section>
    {/if}
  {/each}
</div>
