<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { WarningIcon } from "$ts/images/dialog";
  import { LockIcon } from "$ts/images/power";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewShareData } from "../../types";
  import Accessors from "./ViewShare/Accessors.svelte";
  import AddUser from "./ViewShare/AddUser.svelte";
  import ChangePassword from "./ViewShare/ChangePassword.svelte";
  import ChangeQuota from "./ViewShare/ChangeQuota.svelte";
  import Header from "./ViewShare/Header.svelte";
  import Members from "./ViewShare/Members.svelte";
  import RenameShare from "./ViewShare/RenameShare.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewShareData } = $props();
  const { share, users, accessors } = data;

  const author = users.filter((u) => share.userId === u._id)[0];
  const members = users.filter((u) => share.accessors.includes(u._id));
  const shareAccessors = accessors.filter((a) => a.shareId === share._id);

  async function lock() {
    MessageBox(
      {
        title: share.locked ? "Unlock share?" : "Lock share?",
        message: share.locked ? "Are you sure you want to unlock this share?" : "Are you sure you want to lock this share?",
        image: LockIcon,
        sound: "arcos.dialog.warning",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: share.locked ? "Unlock" : "Lock",
            action: async () => {
              if (share.locked) await process.admin.unlockShare(share._id);
              else await process.admin.lockShare(share._id);

              process.switchPage(
                "viewShare",
                { share: (await process.admin.getAllShares()).filter((s) => s._id === share._id)[0] },
                true,
              );
            },
            suggested: true,
          },
        ],
      },
      process.pid,
      true,
    );
  }

  async function deleteShare() {
    MessageBox(
      {
        title: "Delete share",
        message: "Are you absolute sure you want to delete this share? This can really make some people very angry.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: async () => {
              await process.admin.deleteShare(share._id);
              process.switchPage("shares");
            },
            suggested: true,
          },
        ],
        image: WarningIcon,
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true,
    );
  }
</script>

<div class="leftpanel">
  <Header {process} {share} {author} />
  <Members {process} {share} {members} />
</div>
<div class="rightpanel">
  <div class="split">
    <div class="resets">
      <RenameShare {process} {share} />
      <ChangePassword {process} {share} />
      <AddUser {process} {share} {users} />
      <ChangeQuota {process} {share} />
    </div>
    <div class="quick-actions">
      <button
        class="lucide icon-lock"
        class:icon-lock-open={share.locked}
        class:suggested={share.locked}
        aria-label="Lock share"
        onclick={lock}
      ></button>
      <button class="lucide icon-trash-2" aria-label={"Delete share"} onclick={deleteShare}></button>
    </div>
  </div>
  <Accessors {share} accessors={shareAccessors} />
</div>
