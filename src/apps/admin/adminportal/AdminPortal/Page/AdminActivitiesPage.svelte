<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ActivityCaptionTranslations, ActivityIconTranslations } from "$ts/user/store";
  import { sliceIntoChunks } from "$ts/util";
  import type { ExpandedActivity } from "$types/server/admin";
  import dayjs from "dayjs";
  import type { ActivitiesData } from "../../types";
  import Pagination from "../Pagination.svelte";
  import UsernameDisplay from "../UsernameDisplay.svelte";

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
<div class="table-wrapper activities-list">
  <table>
    <thead>
      <tr>
        <th class="icon-col">
          <span class="lucide icon-shield-ellipsis"></span>
        </th>
        <th>Username</th>
        <th>Action</th>
        <th>User agent</th>
        <th>Frontend</th>
        <th>Timestamp</th>
      </tr>
    </thead>
    <colgroup>
      <col width="1%" />
      <col width="19%" />
      <col width="40%" />
      <col width="20%" />
      <col width="10%" />
      <col width="10%" />
    </colgroup>
    <tbody>
      {#if chunks[currentChunk]}
        {#each chunks[currentChunk] as activity (activity._id)}
          <tr>
            <td class="icon-col"><span class="lucide icon-{ActivityIconTranslations[activity.action]}"></span></td>
            <td class:redacted={$redacted}>
              <UsernameDisplay user={activity.user} {process} />
            </td>
            <td>{ActivityCaptionTranslations[activity.action]}</td>
            <td title={activity.userAgent}>{activity.userAgent}</td>
            <td>{activity.location?.hostname || "Unknown"}</td>
            <td>{dayjs(activity.createdAt).format("D MMM YYYY, HH:mm")}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
