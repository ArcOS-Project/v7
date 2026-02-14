<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { onMount } from "svelte";
  import { Sleep } from "$ts/sleep";
  import Row from "./Migrations/Row.svelte";
  import type { MigrationService } from "$ts/servicehost/services/MigrationSvc";

  const migrationService = Daemon.serviceHost?.getService<MigrationService>("MigrationSvc");

  let config: Record<string, number> = $state({});

  async function refresh() {
    config = {};
    await Sleep(10);
    config = migrationService?.Config || {};
  }

  onMount(() => {
    refresh();
  });
</script>

<p>
  Migrations take care of keeping your configuration files up to date when ArcOS updates. The below list contains the migrations
  that ArcOS has, along with versions installed on your system.
</p>
<div class="list">
  {#if migrationService}
    <div class="row head">
      <div class="name">Migration</div>
      <div class="version local">L</div>
      <div class="version current">C</div>
      <div class="run-migration">Run</div>
    </div>
    {#each Object.entries(config) as [id, version] (id)}
      <Row {id} {version} {migrationService} {refresh} />
    {/each}
  {:else}
    <p class="error-text">The migration service has to be running to access this tab.</p>
  {/if}
</div>
