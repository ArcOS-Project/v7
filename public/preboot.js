onload = function () {
  let prebooted = false;
  window.__DW_STATUS__ = "window.onload";
  const stateLoader = this.document.querySelector("#stateLoader");

  /** @type {Record<EffectiveConnectionType, number>} */
  const timeoutMapping = {
    "slow-2g": 60000 * 4, // 4 minutes
    "2g": 60000 * 2, // 2 minutes
    "3g": 60000, // 1 minute
    "4g": 30000, // 30 seconds
  };

  stateLoader.innerText += ".";

  function loadFail(r) {
    if (prebooted) return;
    prebooted = true;

    const url = "https://docs.arcapi.nl/general-information/troubleshooting#the-dots-of-doom";
    const pre = document.createElement("pre");

    pre.innerHTML = `Unable to load ArcOS -- your browser might not be compatible.<br><br>`;
    pre.innerHTML += r;
    pre.innerHTML += `<br><br><a class="troubleshooting" href="${url}" target="_blank">${url}</a>`;
    pre.className = "system-load-fail";
    stateLoader.append(pre);
    document.body.classList.add("slf");
  }

  const event = (e) => {
    if (window.__DW_INIT__) return;

    if (e instanceof ErrorEvent) {
      loadFail(e.error.stack);
    } else if (e instanceof PromiseRejectionEvent) {
      loadFail(e.reason);
    }
  };

  setTimeout(() => {
    if (this.window.__DW_INIT__) return;

    loadFail(
      `Timeout for load routine failed.<br>Last reported status was: <b>${window.__DW_STATUS__}<b><br><br>Reload to try again.`
    );
  }, timeoutMapping[navigator?.connection?.effectiveType] ?? 5000);

  window.addEventListener("unhandledrejection", event, { once: true });
  window.addEventListener("error", event, { once: true });
};
