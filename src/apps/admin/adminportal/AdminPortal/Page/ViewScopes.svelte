<script lang="ts">
  import { AdminScopes } from "$ts/server/admin/store";
  import { scopeToScopeCaption } from "$ts/server/admin/util";
  import { onMount } from "svelte";
  import { AdminPortalRuntime } from "../../runtime";
  import type { ViewScopesData } from "../../types";
  import PagePills from "./ViewScopes/PagePills.svelte";
  import SpecificPills from "./ViewScopes/SpecificPills.svelte";
  import GlobalPills from "./ViewScopes/GlobalPills.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewScopesData } = $props();
  const { admin, scopes } = data;

  let scopeList = $state<string[]>([...(admin.adminScopes || [])]);
  let originals = $state<string>("");

  onMount(async () => {
    originals = scopeList.join(",");
  });

  function canAccess(...scopes: string[]) {
    if (scopeList.includes(AdminScopes.adminGod)) return true;

    for (const scope of scopes) {
      if (!scopeList.includes(scope)) return false;
    }

    return true;
  }

  function append(scopes: string[]) {
    if (scopeList.includes(AdminScopes.adminGod)) return;

    if (canAccess(...scopes)) {
      for (const scope of scopes) {
        scopeList.splice(scopeList.indexOf(scope), 1);
      }
    } else {
      for (const scope of scopes) {
        if (!scopeList.includes(scope)) scopeList.push(scope);
      }
    }

    scopeList = scopeList;
  }

  async function save() {
    if (
      scopeList.includes(AdminScopes.adminGod) &&
      !(await process.userDaemon!.Confirm(
        "Are you sure?",
        "This user has the <code>admin.god</code> scope applied. This means that they can access all administrative functions of Sacruda, regardless of any other scopes. Are you sure you want to save these changes?",
        "Cancel",
        "Save them",
      ))
    )
      return;

    await process.admin.setScopesOf(admin.username, scopeList);
    await process.switchPage("scopes");
  }
</script>

<div class="header">
  <h1>Scopes of {admin.username}</h1>
  <div class="actions">
    <button
      class="reset-scopes"
      onclick={() => (scopeList = [...(admin.adminScopes || [])])}
      disabled={originals === scopeList.join(",")}
    >
      Revert</button
    >
    <button class="suggested save-scopes" onclick={save} disabled={originals === scopeList.join(",")}>Save</button>
  </div>
</div>
<div class="pills-wrapper">
  <PagePills {canAccess} {append} {process} {scopeList} />
  <SpecificPills {canAccess} {append} {process} {scopeList} />
  <GlobalPills {canAccess} {append} {process} {scopeList} />
</div>
<div class="list">
  {#each Object.entries(scopes) as [id, scope]}
    <div class="item">
      <input
        type="checkbox"
        name=""
        bind:group={scopeList}
        value={scope}
        disabled={scopeList.includes(AdminScopes.adminGod) && scope !== AdminScopes.adminGod}
      />
      <span class="name">Can {scopeToScopeCaption(scope)}</span>
      <span class="id">{scope}</span>
    </div>
  {/each}
</div>
