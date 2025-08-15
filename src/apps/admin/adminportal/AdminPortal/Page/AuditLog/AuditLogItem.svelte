<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import { ServerPfp } from "$ts/images/pfp";
  import { DefaultUserPreferences } from "$ts/server/user/default";
  import { type AuditLog, AuditSeverity, AuditSeverityIcons } from "$types/admin";
  import type { ExpandedUserInfo } from "$types/user";
  import dayjs from "dayjs";

  const { audit, users }: { audit: AuditLog; users: ExpandedUserInfo[] } = $props();

  const DEFAULT: ExpandedUserInfo = {
    _id: "SERVER",
    username: "ArcOS",
    admin: true,
    adminScopes: ["admin.god"],
    approved: true,
    createdAt: "",
    updatedAt: "",
    preferences: DefaultUserPreferences,
    email: "",
    hasTotp: false,
    restricted: false,
    storageSize: 0,
    profile: {
      username: "ArcOS",
      profilePicture: ServerPfp,
      admin: true,
      dispatchClients: 0,
    },
  };

  const author: ExpandedUserInfo | undefined =
    audit.authorId === "SERVER" ? DEFAULT : users.filter((u) => u._id === audit.authorId)[0];
  const target: ExpandedUserInfo | undefined =
    audit.targetUserId === "SERVER" ? DEFAULT : users.filter((u) => u._id === audit.targetUserId)[0];
</script>

{#if audit && author}
  <details class="audit-log {AuditSeverity[audit.severity]}" class:has-data={!!audit.data}>
    <summary>
      <ProfilePicture fallback={author.profile.profilePicture} height={32} />
      <div>
        <b>{author.username}</b>
        <span>{audit.message}</span>
        {#if audit.targetUserId && target}
          <b>{target.username}</b>
        {/if}
        <p class="timestamp">
          {dayjs(audit.createdAt).format("DD MMM YYYY, HH:mm:ss")}
        </p>
      </div>
      <span class="severity lucide icon-{AuditSeverityIcons[audit.severity]}" title={AuditSeverity[audit.severity]}> </span>
    </summary>
    {#if audit.data}
      <div class="context">
        <table class="object">
          <tbody>
            {#each Object.entries(audit.data) as [key, value]}
              <tr class="row">
                <td class="key">
                  {key}
                </td>
                <td class="value">
                  {#if typeof value === "string"}
                    {value}
                  {:else if typeof value === "object"}
                    {JSON.stringify(value, null, 2)}
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </details>
{/if}
