<script lang="ts">
  import { AccountIcon, RoturIcon } from "$ts/images/general";
  import type { RoturUser } from "$types/rotur";
  import type { SettingsRuntime } from "../../runtime";
  import Section from "../Section.svelte";
  import Option from "../Section/Option.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userDaemon } = process;

  let data = $state<RoturUser>();

  $effect(() => {
    fetch();
  });

  function fetch() {
    data = userDaemon?.rotur?.user;
  }

  async function authGui() {
    await userDaemon?.spawnApp("RoturAuthGui", process.pid, userDaemon);

    process.globalDispatch.subscribe("ragui-loggedin", async () => {
      await userDaemon?.restartRotur();
      fetch();
    });
  }
</script>

<div class="centered-layout">
  {#if data}
    <div class="header">
      <img src={data.pfp} alt="" class="pfp" />
      <h1>{data.username}</h1>
      <p>Rotur Account</p>
    </div>
    <Section className="account-stats">
      <div class="stat">
        <p class="name">Currency</p>
        <p class="value">{data["sys.currency"]}</p>
      </div>
    </Section>
  {:else}
    <div class="header">
      <img src={RoturIcon} alt="" />
      <h1>Rotur</h1>
      <p>Log in to Rotur to get even more features!</p>
    </div>
    <Section>
      <Option
        caption="Log in to Rotur..."
        chevron
        image={AccountIcon}
        onclick={authGui}
      ></Option>
    </Section>
  {/if}
</div>
