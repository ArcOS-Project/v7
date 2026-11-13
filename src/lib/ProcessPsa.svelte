<script lang="ts">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import { BTN_OKAY_SUG, MessageBox } from "$ts/util/dialog";
  import dayjs from "dayjs";

  let {
    process,
    location,
    inlineLong = false,
    showMoreButton = false,
  }: { process: IAppProcess; location?: string; inlineLong?: boolean; showMoreButton?: boolean } = $props();
  let psa = process.GetPsa(location);

  function showLong() {
    if (!psa) return;

    MessageBox(
      {
        title: `Public Service Announcement`,
        message: `${psa.message}<br><br>${psa.longMessage}<br><br>In effect until ${dayjs(psa.validUntil).format("D MMMM YYYY, HH:mm")}`,
        image: "WarningIcon",
        buttons: [BTN_OKAY_SUG],
      },
      process.pid,
      true
    );
  }
</script>

{#if psa}
  <div class="window-psa-message severity-{psa.severityStr}">
    <span class="lucide icon-megaphone"></span>
    <span>
      {#if inlineLong}
        {psa.longMessage || psa.message}
      {:else}
        {psa.message}
        {#if psa.longMessage && showMoreButton}<button class="link" onclick={showLong}>More...</button>{/if}
      {/if}
    </span>
  </div>
{/if}
