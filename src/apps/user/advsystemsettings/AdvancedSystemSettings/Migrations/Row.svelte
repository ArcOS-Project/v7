<script lang="ts">
  import { MigrationService } from "$ts/migrations";
  import { Daemon } from "$ts/server/user/daemon";

  const {
    migrationService,
    id,
    version,
    refresh,
  }: { migrationService: MigrationService; id: string; version: number; refresh: () => void } = $props();
  const migration = migrationService.MIGRATIONS.find((m) => m.name === id);

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
    <button class="run-migration" disabled={migration.version === version && !migration.inversional} onclick={runMigration}
      >Run</button
    >
  </div>
{/if}
