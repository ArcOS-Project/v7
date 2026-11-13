<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { MessageBox } from "$ts/util/dialog";
  import type { SharedDriveType } from "$types/server/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";
  import UsernameDisplay from "../../../UsernameDisplay.svelte";

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

<tr ondblclick={() => process.switchPage("viewUser", { user: member })}>
  <td>
    <UsernameDisplay user={member} {process} />
  </td>
  <td>{created}</td>
  <td>{member.approved ? "Yes" : "No"}</td>
  <td>{member.admin ? "Yes" : "No"}</td>
  <td class="actions">
    <button title="Kick user" aria-label="Kick user" onclick={kick}>Kick</button>
  </td>
</tr>
