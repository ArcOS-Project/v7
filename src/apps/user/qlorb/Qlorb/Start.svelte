<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import type { QlorbRuntime } from "../runtime";
  import Background from "./Main/Background.svelte";
  import Help from "./Start/Help.svelte";

  const { process }: { process: QlorbRuntime } = $props();
  const { CurrentPage } = process;

  function start() {
    process.switchPage("game");
  }

  function help() {
    MessageBox(
      {
        title: "Qlorb Help",
        content: Help as any,
        image: "QlorbIcon",
        buttons: [{ caption: "Understood", action() {}, suggested: true }],
      },
      process.pid,
      true
    );
  }

  function exit() {
    process.closeWindow();
  }
</script>

{#if $CurrentPage === "start"}
  <div class="start fullscreen">
    <Background />
    <div class="fullscreen center-flex">
      <h1 class="title">
        <img src={process.app.data.metadata.icon} alt="" />
        <span>Qlorb</span>
        <p>Catch orbs, get points, and get frustrated!</p>
      </h1>
      <button class="option" onclick={start}>Start</button>
      <button class="option" onclick={help}>Help</button>
      <button class="option" onclick={exit}>Exit</button>
    </div>
    <div class="footer">&copy; Izaak Kuipers 2023. Licensed under GPLv3.</div>
  </div>
{/if}

<style scoped>
  .center-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  div.start.fullscreen div.footer {
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0.3;
  }

  h1.title {
    display: flex;
    align-items: center;
    gap: 0px;
    margin-bottom: 20px;
    flex-direction: column;
  }

  h1.title > span {
    font-size: 26px;
  }

  h1.title img {
    height: 96px;
  }

  h1.title p {
    opacity: 0.5;
    font-weight: 100;
  }

  .center-flex button.option {
    text-align: left;
    width: 200px !important;
    padding: 15px 20px !important;
    border: #fff1 3px solid !important;
    background-color: #fff1 !important;
    font-size: 16px;
    display: flex;
    align-items: center;
    outline: none !important;
  }

  .center-flex button::after {
    content: "arrow_forward_ios";
    font-family: "Material Icons Round";
    font-size: 20px;
    margin-left: auto;
  }

  img {
    height: 50px;
  }
</style>
