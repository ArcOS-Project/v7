<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { MessageBox } from "$ts/util/dialog";
  import type { SharedDriveType } from "$types/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";

  const { member, process, share }: { member: ExpandedUserInfo; process: IAdminPortalRuntime; share: SharedDriveType } = $props();
  const { profile } = member;
  const created = dayjs(member.createdAt).format("DD MMM YYYY");

  async function kick() {
    MessageBox(
      {
        title: "Kick member?",
        message:
          "Are you sure you want to kick this member from this share? They can still access it if they still know the credentials.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Kick",
            action: async () => {
              await process.admin.kickUserFromShare(share._id, member._id);
              process.switchPage(
                "viewShare",
                { share: (await process.admin.getAllShares()).filter((s) => s._id === share._id)[0] },
                true
              );
            },
            suggested: true,
          },
        ],
        image: "LogoutIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="member-row" ondblclick={() => process.switchPage("viewUser", { user: member })}>
  <div class="segment pfp">
    <ProfilePicture height={20} fallback={profile.profilePicture} showOnline online={profile.dispatchClients > 0} />
  </div>
  <div class="segment username">{profile.username}</div>
  <div class="segment created">{created}</div>
  <div class="segment approved">{member.approved ? "Yes" : "No"}</div>
  <div class="segment admin">{member.admin ? "Yes" : "No"}</div>
  <div class="segment kick">
    <button class="lucide icon-log-out" title="Kick user" aria-label="Kick user" onclick={kick}></button>
  </div>
</div>
