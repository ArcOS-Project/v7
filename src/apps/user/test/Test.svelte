<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
  import { Sleep } from "$ts/sleep";
  import { htmlspecialchars } from "$ts/util";
  import type { AppComponentProps } from "$types/app";
  import type { TestAppRuntime } from "./runtime";

  const { process }: AppComponentProps<TestAppRuntime> = $props();
  const { lang } = process;

  let code = $state<string>("");
  let result = $state<string[]>([]);
  let output = $state<string>();

  async function run() {
    result = [];
    output = "";
    await Sleep(0);

    try {
      result =
        (await lang.run(code, process.pid, {
          continuous: true,
          stdout: (m) => (output += `${m}\n`),
          onTick: (lang) => {
            process.windowTitle.set(`Test - ${lang.tokens.join(" ")}`);
          },
          onError: (e) => {
            const tokens = `<ul>${e.tokens.map((t) => `<li>${htmlspecialchars(JSON.stringify(t))}`)}</ul>`;

            MessageBox(
              {
                image: WarningIcon,
                title: "Execution Error",
                message: `An error occured while executing the script: <b>${e.message}</b><br><br>At keyword "${e.keyword}" in instruction #${e.pointer}.<br><br><h3>Tokens</h3>${tokens}`,
                buttons: [{ caption: "Okay", action: () => {} }],
              },
              process.pid,
              true
            );
          },
          allowUnsafe: false,
        })) || [];
    } catch (e) {
      MessageBox(
        {
          image: ErrorIcon,
          title: "Something went wrong",
          message: `An error occured that didn't come from the language itself:<br><br>${(e as any).message}`,
          buttons: [{ caption: "Okay", action: () => {} }],
        },
        process.pid,
        true
      );
    }

    output = output;
    result = result;
  }
</script>

<div class="actions">
  <button class="run" onclick={run}>Run code</button>
</div>
<div class="top">
  <textarea bind:value={code} class="editor"></textarea>
  <div class="output">
    {#each result as value, i}
      <p>{i}: {value}</p>
    {/each}
  </div>
</div>
<div class="bottom">
  {output}
</div>
