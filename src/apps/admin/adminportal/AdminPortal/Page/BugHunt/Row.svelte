<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { LogoTranslations } from "$apps/admin/adminportal/store";
  import { QuestionIcon } from "$ts/images/dialog";
  import type { ReadableStore } from "$ts/writable";
  import type { BugReport } from "$types/bughunt";
  import dayjs from "dayjs";

  const { process, report, idEntry }: { process: AdminPortalRuntime; report: BugReport; idEntry: ReadableStore<string> } =
    $props();
  const { redacted } = process;
  const timestamp = dayjs(report.createdAt).format("D MMM YYYY, HH:mm");
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="row"
  onclick={() => ($idEntry = report._id!)}
  class:selected={$idEntry === report._id}
  ondblclick={() => process.switchPage("viewBugReport", { report })}
>
  <div class="segment mode-icon"><img src={LogoTranslations[report.mode] || QuestionIcon} alt="" /></div>
  <div class="segment timestamp">{timestamp}</div>
  <div class="segment title">{report.title}</div>
  <div class="segment author" class:redacted={$redacted}>{report.userData?.username || "Stranger"}</div>
</div>
