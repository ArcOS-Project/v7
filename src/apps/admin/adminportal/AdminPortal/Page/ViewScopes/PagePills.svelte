<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { AdminPortalPageStore } from "$apps/admin/adminportal/store";
  import { MessageBox } from "$ts/dialog";
  import { InfoIcon } from "$ts/images/dialog";
  import { AdminScopeCaptions } from "$ts/server/admin/store";
  import { scopeToScopeCaption } from "$ts/server/admin/util";

  const {
    append,
    canAccess,
    process,
    scopeList,
  }: {
    append: (scopes: string[]) => void;
    canAccess: (...scopes: string[]) => boolean;
    process: AdminPortalRuntime;
    scopeList: string[];
  } = $props();

  function details(key: string, name: string, scopes: string[]) {
    MessageBox(
      {
        title: `${name} (${key})`,
        message: `<p>With this page, this admin can:</p><ul>${scopes.map((s) => `<li>${scopeToScopeCaption(s)}</li>`).join("")}</ul>`,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        image: InfoIcon,
        sound: "arcos.dialog.info",
      },
      process.pid,
      true,
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
