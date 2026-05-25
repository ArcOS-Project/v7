<script lang="ts">
  import type { IMigrationService } from "$interfaces/services/IMigrationService";
  import { Daemon } from "$ts/env";

  const {
    migrationService,
    id,
    version,
    refresh,
  }: { migrationService: IMigrationService; id: string; version: number; refresh: () => void } = $props();
  const migration = migrationService.MIGRATIONS.find((m) => m.name === id);
  const upToDate = migration?.version === version && !migration?.inversional;

  async function runMigration() {
    if (!migration) return;

    const gli = await Daemon.helpers?.GlobalLoadIndicator(`Running ${migration?.friendlyName}...`);

    await migrationService.runMigration(migration, (c) => {
      gli?.caption.set(c);
    });
    refresh();
    await gli?.stop();
  }
</script>

{#if migration}
  <div class="row">
    <div class="name" title={migration.name}>{migration.friendlyName}</div>
    <div class="version local">{version}</div>
    <div class="version current">{migration.version}</div>
    <button
      class="run-migration"
      onclick={runMigration}
      title={upToDate ? "This migration is up to date" : "Click to run this migration now"}
    >
      Run
    </button>
  </div>
{/if}
