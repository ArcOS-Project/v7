<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { WarningIcon } from "$ts/images/dialog";
  import { Sleep } from "$ts/sleep";
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
      result = await lang.run(
        code,
        async () => "",
        (m) => (output += `${m}\n`)
      );

      console.log(result, output);
    } catch (e) {
      MessageBox(
        {
          image: WarningIcon,
          title: "Execution Error",
          message: (e as any).message,
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
