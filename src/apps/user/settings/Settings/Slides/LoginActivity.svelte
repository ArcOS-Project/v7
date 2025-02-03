<script lang="ts">
  import { SecurityLowIcon, WaveIcon } from "$ts/images/general";
  import type { LoginActivity } from "$types/activity";
  import type { SettingsRuntime } from "../../runtime";
  import Activity from "./LoginActivity/Activity.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userDaemon } = process;

  let activities: LoginActivity[] = $state([]);

  $effect(() => {
    getActivity();
  });

  async function getActivity() {
    activities = ((await userDaemon?.getLoginActivity()) || []).reverse();
  }
</script>

<div class="centered-layout">
  <div class="header">
    <img src={SecurityLowIcon} alt="" />
    <h1>Account Activity</h1>
    <p>Here you can see all security activity on your account.</p>
  </div>

  {#each activities as activity}
    <Activity {activity}></Activity>
  {/each}
</div>
