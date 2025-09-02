<script lang="ts">
  import type { SqeletonRuntime } from "../runtime";
  import backdrop from "$assets/sqeleton/backdrop.svg";

  const { process }: { process: SqeletonRuntime } = $props();
  const { data: app } = process.app;
</script>

<div class="intro-screen">
  <img src={backdrop} alt="" class="backdrop" />
  <div class="header">
    <h1>
      <img src={app.metadata.icon} alt="" />
      <span class="name">{app.metadata.name}</span>
      <span class="version">v{app.metadata.version}</span>
    </h1>
    <p>SQLite editor for ArcOS</p>
  </div>
  <div class="actions">
    <button class="open-file" onclick={() => process.openFile()}>
      <span class="lucide icon-folder-open"></span>
      <p>Open file</p>
    </button>
    <button class="new-file" onclick={() => process.newFile()}>
      <span class="lucide icon-database-zap"></span>
      <p>New database</p>
    </button>
    <button class="exit" onclick={() => process.closeWindow()}>
      <span class="lucide icon-power"></span>
      <p>Exit</p>
    </button>
  </div>
  <p class="powered-by">Powered by <a href="https://npmjs.org/package/sql.js">SQL.JS</a></p>
</div>
