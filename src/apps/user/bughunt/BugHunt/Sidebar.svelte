<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { Daemon } from "$ts/daemon";
  import dayjs from "dayjs";
  import type { BugHuntRuntime } from "../runtime";
  import Loading from "./Loading.svelte";

  const { process }: { process: BugHuntRuntime } = $props();
  const { currentTab, loading, store, selectedReport, userPreferences, username } = process;
</script>

<div class="sidebar">
  <div class="tabs">
    <button class="tab private" onclick={() => process.changeTab("private")} class:suggested={$currentTab === "private"}>
      Yours
    </button>
    <button class="tab public" onclick={() => process.changeTab("public")} class:suggested={$currentTab === "public"}>
      Public
    </button>
  </div>
  <div class="selector">
    {#if !$loading}
      {#each $store as report (report._id)}
        <button class="report" onclick={() => ($selectedReport = report._id!)} class:selected={$selectedReport === report._id}>
          <span class="lucide icon-bug"></span>
          <div>
            <h1>{report.title}</h1>
            <p>{dayjs(report.createdAt).format("D MMM YYYY, HH:mm:ss")}</p>
          </div>
        </button>
      {/each}
      {#if !$store.length}
        <p class="empty">No reports here!</p>
      {/if}
    {:else}
      <Loading />
    {/if}
  </div>
  <div class="account">
    <ProfilePicture height={32}></ProfilePicture>
    <div>
      <h1>{$userPreferences.account.displayName || username}</h1>
      <p>{Daemon?.userInfo?.email || "ArcOS User"}</p>
    </div>
  </div>
</div>
