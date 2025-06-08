<script lang="ts">
  import { RelativeTimeMod } from "$ts/dayjs";
  import type { FsAccess } from "$types/fs";
  import type { SharedDriveType } from "$types/shares";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import updateLocale from "dayjs/plugin/updateLocale";

  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", RelativeTimeMod);

  const { accessors, share }: { accessors: FsAccess[]; share: SharedDriveType } = $props();

  const ONE_DAY = 24 * 60 * 60 * 1000;
</script>

<div class="section accessors">
  <h1>Direct File Accessors</h1>
  <div class="accessor-list">
    {#if accessors.length}
      <div class="accessor-row header">
        <div class="segment icon">
          <span class="lucide icon-key"></span>
        </div>
        <div class="segment path">Path</div>
        <div class="segment ttl">Expires</div>
      </div>
      {#each accessors as accessor (accessor._id)}
        <div class="accessor-row">
          <div class="segment icon">
            <span class="lucide icon-key"></span>
          </div>
          <div class="segment path">{accessor.path}</div>
          <div class="segment ttl">{dayjs(new Date(accessor.createdAt!).getTime() + ONE_DAY).fromNow()}</div>
        </div>
      {/each}
    {:else}
      <p class="error-text">No accessors!</p>
    {/if}
  </div>
</div>
