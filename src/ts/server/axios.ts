import { __Console__ } from "$ts/console";
import { Kernel } from "$ts/env";
import type { EnvironmentType } from "$types/kernel";
import axios from "axios";

const presetAuthCode = import.meta.env.DW_SERVER_AUTHCODE;

export const Backend = axios.create({
  baseURL: import.meta.env.DW_SERVER_URL,
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
