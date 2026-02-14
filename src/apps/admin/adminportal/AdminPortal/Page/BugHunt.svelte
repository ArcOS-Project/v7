<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { Logo } from "$ts/branding";
  import { Daemon } from "$ts/daemon";
  import { sortByKey } from "$ts/util";
  import { MessageBox } from "$ts/util/dialog";
  import { Store } from "$ts/writable";
  import type { BugReport } from "$types/bughunt";
  import { onMount } from "svelte";
  import type { BugHuntData } from "../../types";
  import QuickView from "./BugHunt/QuickView.svelte";
  import Row from "./BugHunt/Row.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: BugHuntData } = $props();
  const { reports, stats, users } = data;
  const pages = ["all", "sys", "apps", "closed"] as const;
  type PagesType = (typeof pages)[number];

  let store = Store<BugReport[]>([]);
  let sortState = Store<PagesType>("sys");
  let filterId = Store<string>("");
  let idEntry = Store("");
  let quickView = Store<string>("");
  let selectionList = Store<string[]>([]);

  function updateStore() {
    $store = ($filterId ? reports.filter((r) => r.authorId === $filterId) : reports).filter((report) => {
      switch ($sortState) {
        case "all":
          return true;
        case "closed":
          return report.closed;
        case "sys":
          return !report.closed && !report.isAppReport;
        case "apps":
          return report.isAppReport;
      }
    });
  }

  onMount(() => {
    sortState.subscribe(updateStore);
    filterId.subscribe(updateStore);
  });

  function useIdEntry() {
    const report = reports.filter((r) => r._id === $idEntry)[0];

    if (!report) {
      MessageBox(
        {
          title: "Report ID not found",
          message: "Sorry, the report ID you entered doesn't match any records. Check it, and then try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: "ErrorIcon",
          sound: "arcos.dialog.error",
        },
        process.pid,
        true
      );
      return;
    }

    process.switchPage("viewBugReport", { id: report._id });
  }

  async function closeSelected() {
    const go = await Daemon!.helpers?.Confirm(
      "Confirm Close?",
      "Are you sure you want to close this report?",
      "Abort!",
      "Continue"
    );

    if (!go) return;

    await process.admin.closeBugReport($idEntry);

    process.switchPage("bughunt", {}, true);
  }

  async function deleteSelected() {
    const go = await Daemon!.helpers?.Confirm(
      "Confirm Delete?",
      "Are you sure you want to delete this report?",
      "Abort!",
      "Continue",
      "TrashIcon"
    );

    if (!go) return;

    await process.admin.deleteBugReport($idEntry);

    process.switchPage("bughunt", {}, true);
  }

  async function deleteSelectedMulti() {
    const go = await Daemon!.helpers?.Confirm(
      "Confirm Delete?",
      `Are you sure you want to delete ${$selectionList.length} reports? This is a potentially destructive action!`,
      "Abort!",
      "Continue",
      "TrashIcon"
    );

    if (!go) return;

    const { stop, incrementProgress } = await Daemon.helpers!.GlobalLoadIndicator("Deleting reports...", process.pid, {
      max: $selectionList.length,
    });

    for (const report of $selectionList) {
      await process.admin.deleteBugReport(report);
      incrementProgress?.();
    }

    await stop();

    process.switchPage("bughunt", {}, true);
  }
</script>

<div class="list-wrapper">
  <div class="tabs">
    <p>{$sortState} ({$store.length})</p>
    <select name="" id="" bind:value={$filterId}>
      <option value="">Any user</option>
      {#each users as user (user._id)}
        <option value={user._id}>{user.username}</option>
      {/each}
    </select>
    {#each pages as page}
      <button class:selected={page === $sortState} onclick={() => ($sortState = page)}>{page.toUpperCase()}</button>
    {/each}
  </div>
  <div class="listing">
    <div class="row head">
      <div class="segment mode-icon"><img src={Logo()} alt="" /></div>
      <div class="segment timestamp">Timestamp</div>
      <div class="segment title">Title</div>
      <div class="segment author">Author</div>
    </div>
    {#each sortByKey($store, "createdAt", true) as report (report._id)}
      <Row {process} {report} {idEntry} {quickView} {selectionList} />
    {/each}
    {#if !$store.length}
      <p class="no-results">Logan ate them all.</p>
    {/if}
  </div>
  <div class="id-entry">
    <div class="icon">
      <span class="lucide icon-rectangle-ellipsis"></span>
    </div>
    {#if $selectionList.length < 2}
      <input type="text" placeholder="Enter ID..." bind:value={$idEntry} maxlength="24" />
      <button disabled={$idEntry.length !== 24} onclick={useIdEntry}>Go</button>
      <button
        class="lucide icon-lock-keyhole clr-orange"
        disabled={$idEntry.length !== 24}
        onclick={closeSelected}
        aria-label="Close report"
      ></button>
      <button
        class="lucide icon-trash-2 clr-red"
        disabled={$idEntry.length !== 24}
        onclick={deleteSelected}
        aria-label="Delete report"
      ></button>
    {:else}
      <div class="selection-status">
        <span>
          Selecting {$selectionList.length} of {$store.length} reports
        </span>
        <button class="lucide icon-trash-2" aria-label="Delete reports" onclick={deleteSelectedMulti}></button>
      </div>
    {/if}
  </div>
</div>
<div class="stats">
  {#each Object.entries(stats) as [category, count] (category)}
    <div class="stat">
      <h1>{category}</h1>
      <p class="count">{count}</p>
    </div>
  {/each}
</div>
{#if $quickView}
  <QuickView {process} id={$quickView} {quickView} />
{/if}
