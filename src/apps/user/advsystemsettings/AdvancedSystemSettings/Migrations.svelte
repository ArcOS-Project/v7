<script lang="ts">
  import type { IMigrationService } from "$interfaces/services/IMigrationService";
  import ServiceGate from "$lib/ServiceGate.svelte";
  import Row from "./Migrations/Row.svelte";
</script>

<p>
  Migrations take care of keeping your configuration files up to date when ArcOS updates. The below list contains the migrations
  that ArcOS has, along with versions installed on your system.
</p>
<div class="table-wrapper">
  <ServiceGate id="MigrationSvc">
    {#snippet ifActive(service: IMigrationService)}
      <table>
        <thead>
          <tr>
            <th>Migration</th>
            <th>Latest</th>
            <th>Installed</th>
            <th class="run">Run</th>
          </tr>
        </thead>
        <tbody>
          {#each Object.entries(service.Config) as [id, version] (id)}
            <Row {id} {version} migrationService={service} />
          {/each}
        </tbody>
      </table>
    {/snippet}
    {#snippet ifInactive()}
      <p class="error-text">The migration service has to be running to access this tab.</p>
    {/snippet}
  </ServiceGate>
</div>
