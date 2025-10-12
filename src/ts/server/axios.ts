import { __Console__ } from "$ts/console";
import { Kernel } from "$ts/env";
import { ArcMode } from "$ts/metadata/mode";
import { UUID } from "$ts/uuid";
import type { EnvironmentType } from "$types/kernel";
import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from "axios";

const presetAuthCode = import.meta.env.DW_SERVER_AUTHCODE;

export const Backend = axios.create({
  params: presetAuthCode
    ? {
        authcode: presetAuthCode,
      }
    : {},
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

Backend.interceptors.request.use(
  (config) => {
    config.headers.set("X-Request-ID", Kernel()?.getModule<EnvironmentType>("env").get("dispatch_sock_id"));
    return config;
  },
  (error) => {
    __Console__.log(error);
    return false;
  }
);

export async function createAxiosOverlay() {
  if (!import.meta.env.DEV && ArcMode() !== "development" && !import.meta.env.DW_PREVIEW_DEP_BRANCH) return;

  await import("$css/axiosoverlay.css");
  const overlay = document.createElement("div");
  const requests = new Map<string, InternalAxiosRequestConfig<any>>([]);
  const startTimings = new Map<string, number>([]);

  overlay.className = "axios-overlay";

  Backend.interceptors.request.use((config) => {
    const requestId = UUID();

    config.headers.set("X-Arc-RequestId", requestId);
    requests.set(requestId, config);
    startTimings.set(requestId, Date.now());

    render();

    setTimeout(() => {
      // automatically remove after 6 seconds
      const existing = overlay.querySelector(`[id*="${requestId}"]`);

      existing?.classList.add("completed");
    }, 6000);

    return config;
  });

  Backend.interceptors.response.use(
    (config) => {
      const requestId = config.config?.headers?.get("X-Arc-RequestId");

      requests.delete(`${requestId}`);

      const existing = overlay.querySelector(`[id*="${requestId}"]`);

      if (existing) {
        existing?.classList.add("completed");

        const endTiming = Date.now() - (startTimings.get(`${requestId}`) ?? Date.now()); // 0ms if the start timing isn't there

        existing.querySelector<HTMLDivElement>(".timing")!.innerText = `${endTiming}ms`;
      }

      return config;
    },
    (error) => {
      const requestId = error.config?.headers?.get("X-Arc-RequestId");
      requests.delete(`${requestId}`);

      const existing = overlay.querySelector(`[id*="${requestId}"]`);
      existing?.classList.add("completed", "error");

      // optional: rethrow so normal error handling still works
      return Promise.reject(error);
    }
  );

  function render() {
    for (const [id, request] of [...requests].reverse()) {
      const existing = overlay.querySelector(`[id*="${id}"]`);

      if (!existing) renderRequest(id, request);
    }
  }

  function renderRequest(id: string, request: AxiosRequestConfig<any>) {
    if (!request.method || !request.url) return;

    const div = document.createElement("div");
    const method = document.createElement("div");
    const path = document.createElement("div");
    const timing = document.createElement("div");

    method.className = `method method-${request.method}`;
    method.innerText = request.method.toUpperCase();

    path.className = `path`;
    path.innerText = request.url;

    timing.className = "timing";
    timing.innerText = "";

    div.id = id;
    div.className = "request-item";

    div.append(method, path, timing);
    overlay.insertAdjacentElement("afterbegin", div);
  }

  document.body.append(overlay);
}
