<script lang="ts">
  import { groupByTimeFrame } from "$ts/group";
  import { SecurityLowIcon } from "$ts/images/general";
  import { TimeFrames } from "$ts/server/user/store";
  import type { LoginActivity } from "$types/activity";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Activity from "./LoginActivity/Activity.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userDaemon } = process;

  let groups: Record<string, LoginActivity[]> = $state({});

  $effect(() => {
    getActivity();
  });

  async function getActivity() {
    groups = groupByTimeFrame<LoginActivity>(
      ((await userDaemon?.getLoginActivity()) || []).reverse(),
      "createdAt"
    );
  }
</script>

<div class="centered-layout">
  <div class="header">
    <img src={SecurityLowIcon} alt="" />
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
