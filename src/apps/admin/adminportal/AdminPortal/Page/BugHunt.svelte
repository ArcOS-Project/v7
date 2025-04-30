<script lang="ts">
  import { Store } from "$ts/writable";
  import type { BugReport } from "$types/bughunt";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { BugHuntData } from "../../types";
  import Row from "./BugHunt/Row.svelte";
  import { Logo } from "$ts/branding";
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon } from "$ts/images/dialog";

  const { process, data }: { process: AdminPortalRuntime; data: BugHuntData } = $props();
  const { reports, stats } = data;
  const pages: ("all" | "opened" | "closed" | "resolved")[] = ["all", "opened", "closed", "resolved"];

  let store = Store<BugReport[]>([]);
  let sortState = Store<"all" | "opened" | "closed" | "resolved">("all");
  let idEntry = Store("");

  onMount(() => {
    sortState.subscribe((v) => {
      $store = reports
        .filter((report) => {
          switch (v) {
            case "all":
              return true;
            case "opened":
              return !report.closed;
            case "closed":
              return report.closed;
            case "resolved":
              return report.resolved;
          }
        })
        .reverse();
    });
  });

  function useIdEntry() {
    const report = reports.filter((r) => r._id === $idEntry)[0];

    if (!report) {
      MessageBox(
        {
          title: "Report ID not found",
          message: "Sorry, the report ID you entered doesn't match any records. Check it, and then try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        process.pid,
        true,
      );
      return;
    }

    process.switchPage("viewBugReport", { report });
  }
</script>

<div class="list-wrapper">
  <div class="tabs">
    <p>{$sortState} ({$store.length})</p>
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
    {#each $store as report (report._id)}
      <Row {process} {report} {idEntry} />
    {/each}
    {#if !$store.length}
      <p class="no-results">No results.</p>
    {/if}
  </div>
  <div class="id-entry">
    <div class="icon">
      <span class="lucide icon-rectangle-ellipsis"></span>
    </div>
    <input type="text" placeholder="Enter ID..." bind:value={$idEntry} maxlength="24" />
    <button disabled={$idEntry.length !== 24} onclick={useIdEntry}>Go</button>
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
