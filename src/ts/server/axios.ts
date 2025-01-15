import axios from "axios";

const presetAuthCode = import.meta.env.DW_SERVER_AUTHCODE;

export const Axios = axios.create({
  baseURL: import.meta.env.DW_SERVER_URL,
  params: presetAuthCode
    ? {
        authcode: presetAuthCode,
      }
    : {},
});
