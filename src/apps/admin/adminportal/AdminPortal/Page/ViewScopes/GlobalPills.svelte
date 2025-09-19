<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { globalAdminActions } from "$apps/admin/adminportal/store";
  import { MessageBox } from "$ts/dialog";
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
        message: `<p>With this item, this admin can:</p><ul>${scopes.map((s) => `<li>${scopeToScopeCaption(s)}</li>`).join("")}</ul>`,
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
  <p class="caption">Globals</p>
  <div class="pills">
    {#each Object.entries(globalAdminActions) as [key, { scopes, caption }]}
      <button
        class="pill clr-red printable"
        class:clr-green={canAccess(...scopes)}
        class:clr-blue={!scopes || !scopes.length}
        class:clr-orange={scopes &&
          scopes.filter((s) => !scopeList.includes(s)).length > 0 &&
          scopes.filter((s) => !scopeList.includes(s)).length < scopes.length}
        title={scopes ? scopes?.join(", ") : "No scopes"}
        onclick={() => append(scopes || [])}
        oncontextmenu={() => details(key, caption, scopes || [])}
      >
        {caption}
      </button>
    {/each}
  </div>
</div>
