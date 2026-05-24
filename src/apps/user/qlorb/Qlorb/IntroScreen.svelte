<script lang="ts">
  import type { IQlorbRuntime } from "$interfaces/runtimes/IQlorbRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development
  import { Logo } from "$ts/branding";

  const { process }: { process: IQlorbRuntime } = $props();
  const { CurrentPage, userPreferences } = process;

  CurrentPage.subscribe((v) => {
    if (v != "intro") return;

    if ($userPreferences.appPreferences.QlorbApp.introed) return process.switchPage("start");

    setTimeout(() => {
      $userPreferences.appPreferences.QlorbApp.introed = true;

      process.switchPage("start");
    }, 17000);
  });
</script>

{#if $CurrentPage === "intro"}
  <div class="intro fullscreen">
    <div class="stage1">
      <h1>Created by IzKuipers</h1>
      <p>www.izkuipers.nl</p>
    </div>
    <div class="stage2">
      <h1>
        <Icon icon={Logo()} />
        <span>Written for ArcOS</span>
      </h1>
    </div>
    <div class="stage3">
      <Icon icon={process.app.data.metadata.icon} className="logo" />
    </div>
  </div>
{/if}

<style scoped>
  .intro {
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  .intro div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .intro div.stage1 {
    animation: show 4s forwards 2s;
  }
  .intro div.stage2 {
    animation: show 4s forwards 7s;
  }
  .intro div.stage3 {
    animation: show 4s forwards 12s;
  }
  @keyframes show {
    0% {
      opacity: 0;
      visibility: hidden;
    }

    10%,
    90% {
      opacity: 1;
      visibility: visible;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  h1 {
    display: flex;
    align-items: center;
  }
</style>
