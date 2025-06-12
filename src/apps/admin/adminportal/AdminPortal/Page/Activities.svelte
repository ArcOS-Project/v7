<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ActivityCaptionTranslations, ActivityIconTranslations } from "$ts/server/user/store";
  import type { ExpandedActivity } from "$types/admin";
  import dayjs from "dayjs";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ActivitiesData } from "../../types";

  const { process, data }: { process: AdminPortalRuntime; data: ActivitiesData } = $props();
  const { users } = data;
  const activities: ExpandedActivity[] = data.activities
    .map((a) => ({
      ...a,
      user: users.filter((u) => u._id === a.authorId)[0],
    }))
    .reverse();
</script>

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
  {#each activities as activity (activity._id)}
    <div class="row">
      <div class="segment icon">
        <span class="lucide icon-{ActivityIconTranslations[activity.action]}"></span>
      </div>
      <div class="segment username">
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
</div>
