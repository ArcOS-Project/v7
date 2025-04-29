<script lang="ts">
  import { Store } from "$ts/writable";
  import type { BugReport } from "$types/bughunt";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { BugHuntData } from "../../types";
  import Row from "./BugHunt/Row.svelte";
  import { Logo } from "$ts/branding";

  const { process, data }: { process: AdminPortalRuntime; data: BugHuntData } = $props();
  const { users, reports, stats } = data;
  const pages: ("all" | "opened" | "closed" | "resolved")[] = ["all", "opened", "closed", "resolved"];

  let store = Store<BugReport[]>([]);
  let state = Store<"all" | "opened" | "closed" | "resolved">("all");

  onMount(() => {
    state.subscribe((v) => {
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
</script>

<div class="list-wrapper">
  <div class="tabs">
    <p>{$state} ({$store.length})</p>
    {#each pages as page}
      <button class:selected={page === $state} onclick={() => ($state = page)}>{page.toUpperCase()}</button>
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
      <Row {process} {report} {users} />
    {/each}
    {#if !$store.length}
      <p class="no-results">No results.</p>
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
