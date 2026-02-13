<script lang="ts">
  import { LogoTranslations } from "$apps/admin/adminportal/store";
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { StoreItemIconPrimitive } from "$ts/distrib/util";
  import type { BugReport } from "$types/bughunt";
  import type { ReadableStore } from "$types/writable";
  import dayjs from "dayjs";

  const {
    process,
    report,
    idEntry,
    quickView,
    selectionList,
  }: {
    process: IAdminPortalRuntime;
    report: BugReport;
    idEntry: ReadableStore<string>;
    quickView: ReadableStore<string>;
    selectionList: ReadableStore<string[]>;
  } = $props();
  const { redacted } = process;
  const timestamp = dayjs(report.createdAt).format("D MMM YYYY, HH:mm");

  function onclick(e: MouseEvent) {
    if (e.shiftKey) {
      selectionList.update((v) => {
        if (v.includes(report._id!)) {
          v.splice(v.indexOf(report._id!));
        } else {
          v.push(report._id!);
        }
        return v;
      });
    } else {
      $idEntry = report._id!;
      $selectionList = [$idEntry];
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="row"
  {onclick}
  oncontextmenu={() => ($quickView = report._id!)}
  class:selected={$idEntry === report._id}
  class:selected-multi={$selectionList.includes(report._id!) && $selectionList.length > 1}
  ondblclick={() => process.switchPage("viewBugReport", { id: report._id })}
>
  <div class="segment mode-icon">
    {#if report.isAppReport}
      <img
        src={report.reportAppPkgId ? StoreItemIconPrimitive(report.reportAppPkgId) : process.getIconCached("WindowSettingsIcon")}
        alt=""
      />
    {:else}
      <img src={LogoTranslations[report.mode] || process.getIconCached("QuestionIcon")} alt="" />
    {/if}
  </div>
  <div class="segment timestamp">{timestamp}</div>
  <div class="segment title">{report.title}</div>
  <div class="segment author" class:redacted={$redacted && !!report.userData?.username}>{report.userData?.username || "Stranger"}</div>
</div>
