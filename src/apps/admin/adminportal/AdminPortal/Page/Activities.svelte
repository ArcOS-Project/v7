<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ActivityCaptionTranslations, ActivityIconTranslations } from "$ts/user/store";
  import { sliceIntoChunks } from "$ts/util";
  import type { ExpandedActivity } from "$types/admin";
  import dayjs from "dayjs";
  import type { ActivitiesData } from "../../types";
  import Pagination from "../Pagination.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ActivitiesData } = $props();
  const { redacted } = process;
  const { users } = data;
  const activities: ExpandedActivity[] = data.activities
    .map((a) => ({
      ...a,
      user: users.filter((u) => u._id === a.authorId)[0],
    }))
    .reverse();
  const chunks = sliceIntoChunks(activities, 50) as ExpandedActivity[][];
  const total = activities.length;

  let currentChunk = $state(0);
</script>

<div class="header">
  <h1>ACTIVITIES ({activities.length})</h1>
  <Pagination bind:currentChunk chunkSize={50} totalChunks={chunks.length - 1} totalItems={total} />
</div>
<div class="activities-list">
  <div class="row header">
    <div class="segment icon">
      <span class="lucide icon-shield-ellipsis"></span>
    </div>
    <div class="segment username">Username</div>
    <div class="segment action">Action</div>
    <div class="segment user-agent">User agent</div>
    <div class="segment frontend">Frontend</div>
    <div class="segment timestamp">Timestamp</div>
  </div>
  {#if chunks[currentChunk]}
    {#each chunks[currentChunk] as activity (activity._id)}
      <div class="row">
        <div class="segment icon">
          <span class="lucide icon-{ActivityIconTranslations[activity.action]}"></span>
        </div>
        <div class="segment username" class:redacted={$redacted}>
          {#if activity.user}
            <ProfilePicture height={20} fallback={activity.user.profile.profilePicture} />
            <button class="link" onclick={() => process.switchPage("viewUser", { user: activity.user })}>
              {activity.user.username}
            </button>
          {:else}
            Stranger
          {/if}
        </div>
        <div class="segment action">{ActivityCaptionTranslations[activity.action]}</div>
        <div class="segment user-agent" title={activity.userAgent}>{activity.userAgent}</div>
        <div class="segment frontend">{activity.location?.hostname || "Unknown"}</div>
        <div class="segment timestamp">{dayjs(activity.createdAt).format("D MMM YYYY, HH:mm")}</div>
      </div>
    {/each}
  {/if}
</div>
