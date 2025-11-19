<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { StoreItemIcon } from "$ts/distrib/util";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewStoreItemData } from "../../types";
  import Details from "./ViewStoreItem/Details.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewStoreItemData } = $props();
  const { item } = data;

  let blocking = $state<boolean>(false);
  let blockingNote = $state<string>("");
  let verifying = $state<boolean>(false);
  let verificationNote = $state<string>("");

  async function browseFiles() {
    const path = `T:/AdminBootstrapper/${item._id}`;
    const progress = await process.userDaemon!.files!.FileProgress(
      {
        caption: "Copying files...",
        subtitle: item._id,
        icon: StoreItemIcon(item),
        max: 100,
        done: 0,
      },
      process.pid
    );

    await process.admin.readStoreItemFiles(
      item._id,
      (prog) => {
        progress.show();
        progress.setMax(prog.max + 1);
        progress.setDone(prog.value);
        progress.setType("size");
      },
      (status) => {
        progress.updSub(status.replace(path, ""));
      }
    );

    progress.stop();

    await process.spawnApp("fileManager", +process.env.get("shell_pid"), path);
  }

  async function verify() {
    if (verifying) {
      MessageBox(
        {
          title: "Verify package?",
          message: `Are you sure you want to verify ${item.name} by ${item.user?.username} with the note you provided? The user will receive this note when they manage the package.`,
          buttons: [
            {
              caption: "Cancel",
              action: () => {
                verifying = false;
              },
            },
            {
              caption: "Verify",
              action: async () => {
                await process.admin.verifyStoreItem(item._id, verificationNote);
                await process.switchPage("viewStoreItem", { id: item._id }, true);
              },
              suggested: true,
            },
          ],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.pid,
        true
      );
    } else {
      verifying = true;
    }
  }

  async function deleteVerification() {
    MessageBox(
      {
        title: "Unverify package?",
        message: `Are you sure you want to unverify this package? Anyone trying to install this package will be warned that it hasn't <b>yet</b> been verified.`,
        buttons: [
          {
            caption: "Cancel",
            action: () => {
              verifying = false;
            },
          },
          {
            caption: "Unverify",
            action: async () => {
              await process.admin.deleteStoreItemVerification(item._id);
              await process.switchPage("viewStoreItem", { id: item._id }, true);
            },
            suggested: true,
          },
        ],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }

  async function deprecate() {
    MessageBox(
      {
        title: item.deprecated ? `Undeprecate item?` : `Deprecate item?`,
        message: item.deprecated
          ? `Are you sure you want to undeprecate this store item?`
          : `Are you sure you want to deprecate this store item? This action should really only ever be performed by the author of the package.`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Confirm",
            async action() {
              if (item.deprecated) await process.admin.undeprecatePackage(item._id);
              else await process.admin.deprecatePackage(item._id);

              await process.switchPage("viewStoreItem", { id: item._id }, true);
            },
            suggested: true,
          },
        ],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
  async function block() {
    if (!blocking) return (blocking = true);
    if (item.blocked) {
      MessageBox(
        {
          title: "Unblock item?",
          message: `Are you sure you to unblock this item? This action should only be performed if the blockage has been acknowledged and the package changed to comply.<br><br>Given reason: ${blockingNote || "(none)"}`,
          buttons: [
            {
              caption: "Cancel",
              action: () => {
                blocking = false;
              },
            },
            {
              caption: "Confirm",
              async action() {
                await process.admin.unblockStoreItem(item._id, blockingNote);
                await process.switchPage("viewStoreItem", { id: item._id }, true);
              },
              suggested: true,
            },
          ],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.pid,
        true
      );
    } else {
      MessageBox(
        {
          title: `Block item?`,
          message: `Are you sure you want to block this store item? This action should really only ever be performed if the package violates our rules.<br><br>Given reason: ${blockingNote || "(none)"}`,
          buttons: [
            {
              caption: "Cancel",
              action: () => {
                blocking = false;
              },
            },
            {
              caption: "Confirm",
              async action() {
                await process.admin.blockStoreItem(item._id, blockingNote);
                await process.switchPage("viewStoreItem", { id: item._id }, true);
              },
              suggested: true,
            },
          ],
          image: "WarningIcon",
          sound: "arcos.dialog.warning",
        },
        process.pid,
        true
      );
    }
  }

  async function toggleOfficial() {
    if (item.official) {
      const confirm = await process.userDaemon?.Confirm(
        "Mark store item?",
        "Are you sure you want to mark this store item as NOT official? This implies that the package was not made by ArcOS administrators and does NOT act as an official utility or optional feature for ArcOS",
        "Cancel",
        "Mark unofficial",
        "WarningIcon"
      );

      if (confirm) {
        await process.admin.storeItemMakeNotOfficial(item._id);
        await process.switchPage("viewStoreItem", { id: item._id }, true);
      }
    } else {
      const confirm = await process.userDaemon?.Confirm(
        "Mark store item?",
        "Are you sure you want to mark this store item as official? This implies that the package was made by ArcOS administrators and acts as an official utility or optional feature for ArcOS",
        "Cancel",
        "Mark official",
        "WarningIcon"
      );

      if (confirm) {
        await process.admin.storeItemMakeOfficial(item._id);
        await process.switchPage("viewStoreItem", { id: item._id }, true);
      }
    }
  }

  async function deleteItem() {
    const confirm = await process.userDaemon?.Confirm(
      "Delete store item?",
      "Are you sure you want to delete this store item? This should only ever happen if the user has lost access to their account, or if the package conflicts with another package.",
      "Cancel",
      "Delete",
      "WarningIcon"
    );

    if (confirm) {
      await process.admin.deleteStoreItem(item._id);
      await process.switchPage("store");
    }
  }
</script>

{#if item}
  <div class="left">
    <div class="header">
      <img src={StoreItemIcon(item)} alt="" />
      <div class="info">
        <h1>
          {item.name}
        </h1>
        <p>
          by
          <button
            class="link"
            onclick={async () =>
              process.switchPage("viewUser", { user: await process.admin.getUserByUsername(item.user?.username!) })}
          >
            {item.user?.username}
          </button>
        </p>
        <div class="pills">
          <div class="pill">{item.pkg.version}</div>
          {#if item.pkg.version === item.verifiedVer}
            <div class="pill">Verified</div>
          {/if}
        </div>
      </div>
    </div>
    <div class="operations">
      <div class="official">
        <h1>Official marking</h1>
        <div>
          <div class="status" class:bad={!item.official}>{item.official ? "Official" : "Unofficial"}</div>
          <div class="actions">
            <button onclick={toggleOfficial}>{item.official ? "Disable" : "Enable"}</button>
          </div>
        </div>
      </div>
      <div class="deprecation">
        <h1>Manual Deprecation</h1>
        <div>
          <div class="status" class:bad={item.deprecated}>{item.deprecated ? "Deprecated" : "Maintained"}</div>
          <div class="actions">
            <button class="clr-orange" onclick={deprecate} disabled={item.blocked || blocking || verifying}
              >{item.deprecated ? "Undeprecate" : "Deprecate"}</button
            >
          </div>
        </div>
      </div>
      <div class="blocking">
        <h1>Disciplinary action</h1>
        <div>
          <div class="status" class:bad={item.blocked}>{item.blocked ? "Blocked" : "Unblocked"}</div>
          <div class="actions">
            <button class="clr-red" onclick={block} disabled={verifying}>{item.blocked ? "Unblock..." : "Block..."}</button>
          </div>
        </div>
        {#if blocking}
          <textarea name="" id="" bind:value={blockingNote} placeholder="Reason for {item.blocked ? 'unblock' : 'block'}..."
          ></textarea>
        {/if}
      </div>
      <div class="verification">
        <h1>Package verification</h1>
        <div>
          <div class="status" class:bad={item.verifiedVer !== item.pkg.version}>
            {item.verifiedVer === item.pkg.version ? "Verified" : "Pending"}
          </div>
          <div class="actions">
            <button onclick={browseFiles}>Browse</button>
            {#if item.verifiedVer === item.pkg.version}
              <button onclick={deleteVerification} disabled={item.blocked || blocking}>Unverify</button>
            {:else}
              <button class="clr-green" onclick={verify} disabled={item.blocked || blocking}
                >{verifying ? "Confirm!" : "Verify"}</button
              >
            {/if}
          </div>
        </div>
        {#if verifying}
          <textarea name="" id="" bind:value={verificationNote} placeholder="Verification note..."></textarea>
        {:else if item.verifiedNote}
          <div class="note">
            <h1>Last verification note</h1>
            <p>{item.verifiedNote}</p>
          </div>
        {/if}
      </div>
      <div class="item-actions">
        <h1>Actions</h1>
        <div>
          <div class="actions">
            <button onclick={deleteItem}>Delete...</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Details {item} {process} />
{/if}
