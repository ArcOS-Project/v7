import { WaveKernel } from "$ts/kernel";
import { Environment } from "$ts/kernel/env";
import axios from "axios";

const presetAuthCode = import.meta.env.DW_SERVER_AUTHCODE;

export const Axios = axios.create({
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

Axios.interceptors.request.use(
  (config) => {
    config.headers.set("X-Request-ID", WaveKernel.get().getModule<Environment>("env").get("dispatch_sock_id"));
    return config;
  },
  (error) => Promise.reject(error)
);
