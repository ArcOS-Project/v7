<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon, WarningIcon } from "$ts/images/dialog";
  import type { Interpreter } from "$ts/lang/interpreter";
  import type { AppComponentProps } from "$types/app";
  import { onMount } from "svelte";
  import type { TestAppRuntime } from "./runtime";

  const { process }: AppComponentProps<TestAppRuntime> = $props();
  const { lang } = process;

  let code = $state<string>("");
  let variables = $state<[string, any][]>([]);
  let output = $state<string>();
  let executionDiv = $state<HTMLDivElement>();
  let execution = $state<string>("");
  let running = $state<boolean>(false);
  let pid = $state<number>(-1);
  let workingDirectory = $state<string>("U:/");

  onMount(() => {
    process.acceleratorStore.push({
      ctrl: true,
      key: "enter",
      action: () => {
        run();
      },
    });
  });

  async function run() {
    if (running) return;

    running = true;
    output = "";
    execution = "";
    variables = [];

    try {
      const proc = (await lang.run(code, process.pid, {
        workingDir: workingDirectory,
        stdout: (m) => (output += `${JSON.stringify(m)}\n`),
        onError: (e) => {
          MessageBox(
            {
              image: WarningIcon,
              title: "Execution Error",
              message: `An error occured: ${e.message}.<br><br>At position ${e.line}:${e.column}.<br><code class="block">${e.input}</code>`,
              buttons: [
                {
                  caption: "Okay",
                  action: () => {
                    running = false;
                  },
                },
              ],
            },
            process.pid,
            true
          );
        },
        onExit: (lang) => {
          const pid = lang.pid;

          setTimeout(() => {
            output = `[${pid} Exited]`;
            execution = "";
            process.windowTitle.set(`Test`);
            running = false;
            variables = [];
          }, 1000);
        },
        allowUnsafe: true,
      })) as Interpreter;

      pid = proc.pid;
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
    variables = variables;
  }

  function stop() {
    process.handler.kill(pid);
  }
</script>

<div class="actions">
  <button class="run" onclick={run} disabled={running}>Run</button>
  <button class="stop" onclick={stop} disabled={!running}>Stop</button>
  <p>{pid}</p>
  <input type="text" bind:value={workingDirectory} placeholder="U:/" />
</div>
<div class="top">
  <textarea bind:value={code} class="editor"></textarea>
  <div class="output">
    <div bind:this={executionDiv}>
      {execution}
    </div>
    <div>
      {#each variables as [id, variable]}
        {id} -> {variable}<br />
      {/each}
    </div>
  </div>
</div>
<div class="bottom">
  {output}
</div>
