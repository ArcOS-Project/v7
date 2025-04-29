<script lang="ts">
  import { LogoTranslations } from "$apps/admin/adminportal/store";
  import { GrayLogo } from "$ts/images/branding";
  import type { BugReport } from "$types/bughunt";

  const { report }: { report: BugReport } = $props();
</script>

<div class="property client">
  <p class="key">Client</p>
  <div class="value">
    <p class="host">{report.frontend}</p>
    <div class="flags">
      <div class="flag">Vite: {report.meta ? (report.meta.PROD ? "Production" : "Development") : "No meta!"}</div>
      <div class="flag"><span>Mode: {report.mode}</span><img src={LogoTranslations[report.mode] || GrayLogo} alt="" /></div>
      <div class="flag">Build: {report.build}</div>
      <div class="flag">Version: {report.version}</div>
    </div>
  </div>
</div>
