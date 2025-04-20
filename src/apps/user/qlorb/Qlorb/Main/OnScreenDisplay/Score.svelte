<script lang="ts">
  import type { QlorbRuntime } from "$apps/user/qlorb/runtime";

  const { process }: { process: QlorbRuntime } = $props();
  const { userPreferences, Score, Clicks } = process;

  let topScore = $state("");
  let score = $state("");
  let clicks = $state("");
  let scoreN = $state(0);

  function setTopScore(score: number) {
    if (!$userPreferences.appPreferences.QlorbApp) $userPreferences.appPreferences.QlorbApp = { top: 0 };

    const currentTop = ($userPreferences.appPreferences.QlorbApp.top as number) || 0;

    if (score > currentTop) $userPreferences.appPreferences.QlorbApp.top = score;
  }

  userPreferences.subscribe((v) => {
    if (!v.appPreferences.QlorbApp || !v.appPreferences.QlorbApp.top) return (topScore = "000000");

    topScore = v.appPreferences.QlorbApp.top.toString().padStart(6, "0");
  });

  Score.subscribe((v) => {
    scoreN = v;
    score = v.toString().padStart(6, "0");

    setTopScore(v);
  });

  Clicks.subscribe((v) => (clicks = v.toString().padStart(3, "0")));
</script>

<div class="score">
  <span class="current">{score}</span>
  <div class="top">
    <div class="stat">
      <span class="label">Top</span>
      <span class="value">{topScore}</span>
    </div>
    <div class="stat">
      <span class="label">Clicks</span>
      <span class="value">{clicks}</span>
    </div>
    <div class="stat">
      <span class="label">Level</span>
      <span class="value">{Math.floor(scoreN / 100)}</span>
    </div>
  </div>
</div>
