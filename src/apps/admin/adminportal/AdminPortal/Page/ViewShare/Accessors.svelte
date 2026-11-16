<script lang="ts">
  import { RelativeTimeMod } from "$ts/dayjs";
  import type { SharedDriveType } from "$types/server/shares";
  import type { FsAccess } from "$types/system/fs";
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
  <div class="table-wrapper accessor-list">
    <table>
      <thead>
        <tr>
          <th class="icon-col">
            <span class="lucide icon-key"></span>
          </th>
          <th>Path</th>
          <th>Expires</th>
        </tr>
      </thead>
      <colgroup></colgroup>
      <tbody>
        {#each accessors as accessor (accessor._id)}
          <tr class="accessor-row">
            <td class="icon-col">
              <span class="lucide icon-key"></span>
            </td>
            <td>{accessor.path}</td>
            <td>{dayjs(new Date(accessor.createdAt!).getTime() + ONE_DAY).fromNow()}</td>
          </tr>
        {/each}
        {#if !accessors.length}
          <tr>
            <td colspan="3">
              <p class="error-text">No accessors!</p>
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
