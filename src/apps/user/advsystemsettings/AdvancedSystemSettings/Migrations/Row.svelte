<script lang="ts">
  import type { IMigrationService } from "$interfaces/services/IMigrationService";
  import { Daemon } from "$ts/env";

  let { migrationService, id, version }: { migrationService: IMigrationService; id: string; version: number } = $props();
  const migration = migrationService.MIGRATIONS.find((m) => m.name === id);
  const upToDate = migration?.version === version && !migration?.inversional;

  async function runMigration() {
    if (!migration) return;

    const gli = await Daemon.helpers?.GlobalLoadIndicator(`Running ${migration?.friendlyName}...`);

    await migrationService.runMigration(migration, (c) => {
      gli?.caption.set(c);
    });
    await gli?.stop();
    version = migration.version;
  }
</script>

{#if migration}
  <tr>
    <td class="name" title={migration.name}>{migration.name}</td>
    <td class="version latest">{migration.version}</td>
    <td class="version installed">{version}</td>
    <td class="run">
      <button
        class="run-migration"
        onclick={runMigration}
        title={upToDate ? "This migration is up to date" : "Click to update this migration"}>Run</button
      >
    </td>
  </tr>
{/if}
