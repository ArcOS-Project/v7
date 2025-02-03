<script lang="ts">
  import {
    ActivityCaptionTranslations,
    ActivityIconTranslations,
  } from "$ts/server/user/store";
  import type { LoginActivity } from "$types/activity";
  import dayjs from "dayjs";

  const { activity }: { activity: LoginActivity } = $props();

  let timestamp = $state(
    dayjs(activity.createdAt).format("ddd D MMM, HH:mm:ss")
  );
</script>

<div class="activity-item">
  <div class="icon">
    <span
      class="lucide icon-{ActivityIconTranslations[activity.action] ||
        'shield-question'}"
    ></span>
  </div>
  <div class="info">
    <p class="what">
      <span>
        {ActivityCaptionTranslations[activity.action] || "Unknown activity"}
      </span>
      <span class="when">at {timestamp}</span>
    </p>
    <p class="ua">
      <span class="user-agent" title={activity.userAgent}
        >{activity.userAgent}</span
      >
    </p>
    {#if activity.location}
      <p class="frontend">On {activity.location?.hostname}</p>
    {/if}
  </div>
</div>
