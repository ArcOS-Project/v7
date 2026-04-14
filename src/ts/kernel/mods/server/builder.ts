import { CommandResult } from "$ts/result";
import type { AxiosInstance, Method, MethodsHeaders, RawAxiosRequestHeaders, ResponseType } from "axios";
import { Backend } from "./axios";
import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";

export class ApiCallBuilder<Result = never> {
  token?: string;
  built = false;
  axios?: AxiosInstance = Backend;
  method?: Method;
  params?: any;
  postBody?: any;
  specialHeaders?: Record<string, string>;
  responseType?: ResponseType;

  constructor(builder?: ApiCallBuilder) {
    if (builder) {
      this.token = builder.token;
      this.axios = builder.axios;
      this.method = builder.method;
      this.params = builder.params;
      this.postBody = builder.postBody;
      this.specialHeaders = builder.specialHeaders;
      this.responseType = builder.responseType;
    }
  }

  UseInstance(instance: AxiosInstance) {
    this.Log(`UseInstance: ${instance.defaults.baseURL}`);
    this.Check(() => undefined);
    this.axios = instance;

    return this;
  }

  WithToken(token?: string) {
    if (!token) return this;

    this.Log("WithToken");
    this.Check((b) => b.token);
    this.token = token;

    return this;
  }

  WithMethod(method: Method) {
    this.Log(`WithMethod: ${method}`);
    this.Check((b) => b.method);
    this.method = method;

    return this;
  }

  WithPostBody(postBody: any) {
    this.Log("WithPostBody");
    this.Check((b) => b.postBody);
    this.postBody = postBody;

    return this;
  }

  WithParams(params: any) {
    this.Log("WithParams");
    this.Check((b) => b.params);
    this.params = params;

    return this;
  }

  WithSpecialHeaders(headers: Record<string, string>) {
    this.Log("WithSpecialHeaders");
    this.Check((b) => b.specialHeaders);
    this.specialHeaders = headers;

    return this;
  }

  WithResponseType(type: ResponseType) {
    this.Log("WithResponseType");
    this.Check((b) => b.responseType);
    this.responseType = type;

    return this;
  }

  Produces<T = never>() {
    return new ApiCallBuilder<T>(this); // Changes the return type
  }

  async Execute(url: string): Promise<CommandResult<Result>> {
    if (this.built) throw new Error("ApiCallBuilder already consumed");
    this.built = true;
    this.Log("Execute");

    const headers: RawAxiosRequestHeaders & MethodsHeaders = this.specialHeaders ?? {};

    if (this.token) headers["Authorization"] = `Bearer ${this.token}`;

    try {
      const response = await this.axios?.request({
        method: this.method ?? "get",
        url: url ?? "/ping",
        params: this.params ?? {},
        data: this.postBody,
        headers,
        responseType: this.responseType ?? "json",
      });

      if (!response) return CommandResult.Error("Response is empty - Did you call UseInstance?");

      return CommandResult.Ok(response!.data);
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  private Check(predicate: (builder: ApiCallBuilder<Result>) => any) {
    const property = predicate(this);

    if (property !== undefined && property !== null) throw new Error("ApiCallBuilder property was set more than once");
    if (this.built) throw new Error("ApiCallBuilder has to be fully configured before building");
  }

  public static Get<Result = never>() {
    return new this<Result>().WithMethod("GET");
  }

  public static Post<Result = never>() {
    return new this<Result>().WithMethod("POST");
  }

  public static Patch<Result = never>() {
    return new this<Result>().WithMethod("PATCH");
  }

  public static Delete<Result = never>() {
    return new this<Result>().WithMethod("DELETE");
  }

  public static Put<Result = never>() {
    return new this<Result>().WithMethod("PUT");
  }

  private Log(message: string, level = LogLevel.info) {
    Log(`ApiCallBuilder`, message, level);
  }
}
