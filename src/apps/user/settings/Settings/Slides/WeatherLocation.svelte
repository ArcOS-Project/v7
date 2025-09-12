<script lang="ts">
  import type { SettingsRuntime } from "$apps/user/settings/runtime";
  import { MessageBox } from "$ts/dialog";
  import { ErrorIcon } from "$ts/images/dialog";
  import { GlobeIcon } from "$ts/images/general";
  import { KernelStack } from "$ts/kernel/mods/stack";
  import type { WeatherSearchResponse, WeatherSearchResult } from "$types/weather";
  import axios from "axios";
  import Section from "../Section.svelte";

  const { process }: { process: SettingsRuntime } = $props();
  const { userPreferences } = process;

  let searchInput = $state("");
  let working = $state(false);
  let searchResults = $state<WeatherSearchResult[]>([]);
  let hasSearched = $state(false);

  async function search() {
    working = true;
    hasSearched = true;
    try {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchInput}`);

      searchResults = (response.data as WeatherSearchResponse).results || [];
    } catch {
      MessageBox(
        {
          image: ErrorIcon,
          title: `Failed to search for '${searchInput}'`,
          message: "An error occured while trying to search for your query. Please try again later.",
          buttons: [{ caption: "Okay", suggested: true, action: () => {} }],
        },
        process.pid,
        true
      );
      process.slideVisible.set(false);
    }
    working = false;
  }

  function apply(result: WeatherSearchResult) {
    userPreferences.update((v) => {
      v.shell.actionCenter.weatherLocation = {
        latitude: result.latitude,
        longitude: result.longitude,
        name: result.country ? `${result.name || "Unknown"}, ${result.country}` : result.name || "Unknown",
      };

      v.shell.actionCenter.cardIndex = 0;

      return v;
    });

    const dispatch = KernelStack().ConnectDispatch(+process.env.get("shell_pid"));

    dispatch?.dispatch("refresh-weather");

    setTimeout(() => {
      dispatch?.dispatch("open-action-center");
      searchInput = "";
      hasSearched = false;
      working = false;
      searchResults = [];
    }, 300);

    process.slideVisible.set(false);
  }

  function keydown(e: KeyboardEvent) {
    if (e.key === "Enter" && searchInput) search();
  }
</script>

<div class="centered-layout">
  <div class="header">
    <img src={GlobeIcon} alt="" />
    <h1>Weather location</h1>
    <p>From where do you want to see the weather?</p>
  </div>
  <Section>
    <div class="option search-bar">
      <input type="text" bind:value={searchInput} onkeydown={keydown} />
      <button
        class="lucide icon-search"
        title="Search for location"
        disabled={!searchInput || working}
        aria-label="Search for location"
        onclick={search}
      ></button>
    </div>

    <div class="option search-results">
      {#if working}
        <p class="working">Searching...</p>
      {:else if hasSearched}
        {#if !searchResults.length}
          <p class="no-results">Can't find a place with that name. Maybe try searching for something else?</p>
        {:else}
          {#each searchResults as result}
            <button class="result" onclick={() => apply(result)}>
              {result.name} in {result.admin1 || result.admin2}, {result.country}
            </button>
          {/each}
        {/if}
      {:else}
        <p class="get-started">Type in the name of a country, city or place of which you want to see the weather.</p>
      {/if}
    </div>
  </Section>

  <br />
</div>
