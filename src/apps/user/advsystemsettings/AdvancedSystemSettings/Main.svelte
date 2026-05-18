<script lang="ts">
  import { Daemon } from "$ts/daemon";
  import { ArcOSVersion, Env, Stack, State } from "$ts/env";
  import { KernelModules } from "$ts/kernel/getters";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import { ApplicationStorage } from "$ts/servicehost/services/AppStorage";
  import type { AdvSysSetRuntime } from "../runtime";

  const { process }: { process: AdvSysSetRuntime } = $props();
  const { userPreferences } = process;
  const userInfo = Daemon?.userInfo;
  const appStore = Daemon?.serviceHost?.getService<ApplicationStorage>("AppStorage")?.buffer();
</script>

<div class="left">
  <img src={process.getIconCached("ArcSystemIcon")} alt="" />
  <div class="main-actions">
    <button class="link" onclick={() => process.spawnOverlayApp("BugHuntCreator", +Env.get("shell_pid"))}>Report a bug...</button>
  </div>
</div>

<div class="info">
  <section>
    <h1>Version:</h1>
    <ul>
      <li>ArcOS v7</li>
      <li>{ArcMode()}_{ArcBuild()}</li>
      <li>Version {ArcOSVersion}</li>
      <li>{location.hostname}</li>
    </ul>
  </section>

  <section>
    <h1>ArcOS System:</h1>
    <ul>
      <li title={KernelModules().join(", ")}>Kernel modules: {KernelModules().length} loaded</li>
      <li title={Object.keys(State?.store || {}).join(", ")}>
        States: {Object.entries(State?.store || {}).length} loaded
      </li>
      <li>Process count: {Stack.store().size} running</li>
      <li>Installed apps: {appStore?.length} loaded</li>
    </ul>
  </section>

  <section>
    <h1>Your Account:</h1>
    <ul>
      {#if $userPreferences.account.displayName}
        <li>{$userPreferences.account.displayName}</li>
      {/if}
      <li>{userInfo?.username}</li>
      <li>{userInfo?.email}</li>
      <li>{userInfo?._id}</li>
    </ul>
  </section>
</div>
