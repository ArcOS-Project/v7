<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ProfilePictures } from "$ts/images/pfp";
  import type { ScopesData } from "../../types";
  import ScopeRow from "./Scopes/ScopeRow.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ScopesData } = $props();
  const { admins } = data;
</script>

<div class="table-wrapper scope-list">
  <table>
    <thead>
      <tr>
        <th> Username </th>
        <th>Pages</th>
        <th>Count</th>
        <th>God?</th>
      </tr>
    </thead>
    <colgroup>
      <col width="20%" />
      <col width="78%" />
      <col width="1%" />
      <col width="1%" />
    </colgroup>
    <tbody>
      {#each admins as admin (admin._id)}
        <ScopeRow {admin} {process} />
      {/each}
    </tbody>
  </table>
</div>
