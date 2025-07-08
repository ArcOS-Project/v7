(() => {
  function loadFail(r) {
    const url = "https://docs.arcapi.nl/general-information/troubleshooting#the-dots-of-doom";
    const pre = document.createElement("pre");

    pre.innerHTML = `Unable to load ArcOS: your browser might not be compatible.<br><br>`;
    pre.innerHTML += r;
    pre.innerHTML += `<br><br><a class="troubleshooting" href="${url}" target="_blank">${url}</a>`;
    pre.className = "system-load-fail";
    document.querySelector("#stateLoader").append(pre);
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

  window.addEventListener("unhandledrejection", event, { once: true });
  window.addEventListener("error", event, { once: true });
})();
