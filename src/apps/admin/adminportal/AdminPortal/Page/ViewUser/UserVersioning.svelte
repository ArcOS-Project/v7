<script lang="ts">
  import type { ViewUserData } from "$apps/admin/adminportal/types";

  let { data }: { data: ViewUserData } = $props();
  let { migrations, osVersion } = data;
</script>

<div class="section versioning">
  <h1>Versioning</h1>
  <div class="versions">
    <div class="os">OS: {osVersion}</div>
    <div class="migrations">
      {#each Object.entries(migrations) as [migration, version]}
        <div class="version {migration}">
          <span class="id" title={migration}>{migration.slice(0, 8)}</span>
          <span class="value">{version}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
