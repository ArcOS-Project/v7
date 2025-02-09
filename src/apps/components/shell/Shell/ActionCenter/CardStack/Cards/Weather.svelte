<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { WeatherInformation } from "$apps/components/shell/types";
  import { SettingsRuntime } from "$apps/user/settings/runtime";
  import { Sleep } from "$ts/sleep";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import Spinner from "../../../../../../../lib/Spinner.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;

  let data = $state<WeatherInformation>();
  let loading = $state<boolean>(true);

  $effect(() => {
    refresh();

    process.dispatch.subscribe("refresh-weather", () => refresh());
  });

  async function refresh(fromContext = false) {
    if (fromContext) {
      await Sleep(1);

      process.actionCenterOpened.set(true);
    }
    loading = true;
    data = await process.getWeather();
    loading = false;
  }

  async function changeLocation() {
    await process.spawnApp<SettingsRuntime>(
      "systemSettings",
      process.pid,
      "shell",
      "shell_weatherLocation"
    );
  }
</script>

<div
  class="card weather partly-sunny"
  style={data && data.gradient
    ? `--gradient-start: ${data.gradient.start}; --gradient-end: ${data.gradient.end};`
    : ""}
  class:loading
  class:errored={!data}
  class:night={data && data.isNight}
>
  {#if !loading}
    {#if data}
      {#if data.icon && data.iconColor}
        <span
          class="condition-icon lucide icon-{data.icon}"
          style="--color: {data.iconColor};"
        ></span>
      {/if}
      <h1
        use:contextMenu={{
          process,
          options: async () => [
            {
              caption:
                $userPreferences.shell.actionCenter.weatherLocation.name ||
                "Weather",
              disabled: () => true,
              action: () => {},
              separator: true,
            },
            {
              icon: "map-pin",
              caption: "Change location...",
              action: changeLocation,
            },
            {
              icon: "refresh-cw",
              caption: "Refresh",
              action: () => refresh(true),
            },
          ],
        }}
      >
        {data.temperature.toFixed(1)} °C
      </h1>
      <p>
        <button
          class="lucide icon-refresh-cw"
          aria-label="Refresh"
          onclick={() => refresh()}
        ></button>
        {#if data.condition}
          <span>
            {data.condition}
          </span>
        {/if}
      </p>
    {:else}
      <p>Failed to get weather info</p>
      <button
        class="retry lucide icon-refresh-cw"
        aria-label="Retry"
        onclick={() => refresh()}
      ></button>
    {/if}
  {:else}
    <Spinner height={32} />
  {/if}
</div>
