<script lang="ts">
  import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
  import Icon from "$lib/Icon.svelte";
  import { Daemon } from "$ts/env";
  import { TimeFrames } from "$ts/user/store";
  import { groupByTimeFrame } from "$ts/util";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
  import type { LoginActivity } from "$types/user/activity";
  import { onMount } from "svelte";
  import Section from "../Section.svelte";
  import Activity from "./LoginActivity/Activity.svelte";

  const { process }: { process: ISettingsRuntime } = $props();

  let groups: Record<string, LoginActivity[]> = $state({});

  onMount(() => {
    getActivity();
  });

  async function getActivity() {
    const activityResult = await Daemon.activity?.getLoginActivity();

    if (!activityResult?.errorMessage) {
      MessageBox(
        {
          title: "An error occurred",
          message: `Failed to obtain your login activity. ${activityResult?.errorMessage ?? "Unknown fault."}`,
          buttons: [BTN_OKAY_SUG],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.pid,
        true
      );

      return;
    }

    groups = groupByTimeFrame<LoginActivity>(activityResult.result!.reverse(), "createdAt");
  }
</script>

<div class="centered-layout">
  <div class="header">
    <Icon icon="SecurityLowIcon" />
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
