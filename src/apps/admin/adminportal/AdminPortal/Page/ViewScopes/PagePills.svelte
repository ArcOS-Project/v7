<script lang="ts">
  import { AdminPortalPageStore } from "$apps/admin/adminportal/store";
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { AdminScopeCaptions } from "$ts/servicehost/services/AdminBootstrapper/store";
  import { scopeToScopeCaption } from "$ts/util/admin";
  import { MessageBox } from "$ts/util/dialog";

  const {
    append,
    canAccess,
    process,
    scopeList,
  }: {
    append: (scopes: string[]) => void;
    canAccess: (...scopes: string[]) => boolean;
    process: IAdminPortalRuntime;
    scopeList: string[];
  } = $props();

  function details(key: string, name: string, scopes: string[]) {
    MessageBox(
      {
        title: `${name} (${key})`,
        message: `<p>With this page, this admin can:</p><ul>${scopes.map((s) => `<li>${scopeToScopeCaption(s)}</li>`).join("")}</ul>`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: "InfoIcon",
        sound: "arcos.dialog.info",
      },
      process.pid,
      true
    );
  }
</script>

<div class="access-pills">
  <p class="caption">Pages</p>
  <div class="pills">
    {#each [...AdminPortalPageStore] as [key, { name, scopes }]}
      <button
        class="pill clr-red"
        class:clr-green={canAccess(...(scopes || []))}
        class:clr-blue={!scopes?.length}
        class:clr-orange={scopes &&
          scopes.filter((s) => !scopeList.includes(s)).length > 0 &&
          scopes.filter((s) => !scopeList.includes(s)).length < scopes.length}
        title={scopes?.map((s) => AdminScopeCaptions[s] || s).join(", ") || "No scopes"}
        onclick={() => append(scopes || [])}
        oncontextmenu={() => details(key, name, scopes || [])}
      >
        {name}
      </button>
    {/each}
  </div>
</div>
