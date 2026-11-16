<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { sortByKey } from "$ts/util";
  import { formatBytes } from "$ts/util/fs";
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import type { FilesystemsData, FilesystemsPageQuota } from "../../types";
  import FilesystemRow from "./Filesystems/FilesystemRow.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: FilesystemsData } = $props();
  const { users } = data;
  const { admin } = process;

  const quotas = Store<FilesystemsPageQuota[]>([]);
  let loading = $state<boolean>(true);
  let used = $state<number>(0);
  let available = $state<number>(0);
  let total = $state<number>(0);

  onMount(async () => {
    await Promise.all(
      users.map((u) =>
        process.admin.getQuotaOf(u.username).then((quota) =>
          quotas.update((v) => {
            v.push({
              user: u,
              ...quota!,
            });
            return v;
          })
        )
      )
    );

    used = $quotas.reduce((a, b) => a + b.used, 0);
    available = $quotas.reduce((a, b) => a + b.free, 0);
    total = $quotas.reduce((a, b) => a + b.max, 0);

    loading = false;
  });
</script>

<div class="table-wrapper fs-list">
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Used ({formatBytes(used)})</th>
        <th>Free ({formatBytes(available)})</th>
        <th>Total ({formatBytes(total)})</th>
        <th>Quota</th>
        <th class="actions">Actions</th>
      </tr>
    </thead>
    <colgroup>
      <col width="50%" />
      <col width="15%" />
      <col width="15%" />
      <col width="15%" />
      <col width="1%" />
      <col width="19%" />
    </colgroup>
    <tbody>
      {#each sortByKey($quotas, "used", true) as quota (quota.user._id)}
        <FilesystemRow {quota} {admin} {process} />
      {/each}
    </tbody>
  </table>
</div>
<div class="loading-overlay" class:show={loading}>
  <Spinner height={32} />
  <p>Collecting information</p>
</div>
