<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { sortByKey } from "$ts/util";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { FilesystemsData, FilesystemsPageQuota } from "../../types";
  import FilesystemRow from "./Filesystems/FilesystemRow.svelte";
  import { formatBytes } from "$ts/util/fs";

  const { process, data }: { process: AdminPortalRuntime; data: FilesystemsData } = $props();
  const { users } = data;
  const { admin } = process;

  const quotas = Store<FilesystemsPageQuota[]>([]);
  let loading = $state<boolean>(true);

  onMount(async () => {
    for (const user of users) {
      const quota = await process.admin.getQuotaOf(user.username);
      quotas.update((v) => {
        v.push({
          user,
          ...quota!,
        });
        return v;
      });
    }
    loading = false;
  });
</script>

<div class="fs-list">
  <div class="row header">
    <!-- reduce calls: https://stackoverflow.com/a/16751601 -->
    <div class="segment pfp">
      <ProfilePicture height={20} />
    </div>
    <div class="segment username">Username</div>
    <div class="segment used">Used ({formatBytes($quotas.map((v) => v.used).reduce((partialSum, a) => partialSum + a, 0))})</div>
    <div class="segment available">
      Free ({formatBytes($quotas.map((v) => v.free).reduce((partialSum, a) => partialSum + a, 0))})
    </div>
    <div class="segment total">Total ({formatBytes($quotas.map((v) => v.max).reduce((partialSum, a) => partialSum + a, 0))})</div>
    <div class="segment quota">Quot</div>
    <div class="segment index">Index</div>
    <div class="segment mount">Mount</div>
  </div>
  {#each sortByKey($quotas, "used", true) as quota (quota.user._id)}
    <FilesystemRow {quota} {admin} {process} />
  {/each}
</div>
<div class="loading-overlay" class:show={loading}>
  <Spinner height={32} />
  <p>Collecting information</p>
</div>
