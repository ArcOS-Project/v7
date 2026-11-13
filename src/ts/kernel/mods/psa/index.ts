import type { IWaveKernel } from "$interfaces/IWaveKernel";
import {
  PsaSeverity,
  type IPsaKernelModule,
  type ParsedPsaItem,
  type PsaResponse,
  type PsaShowIn,
  type RawPsaItem,
} from "$interfaces/modules/IPsaKernelModule";
import { Kernel } from "$ts/env";
import { KernelModule } from "$ts/kernel/module";
import axios from "axios";

export class PsaKernelModule extends KernelModule implements IPsaKernelModule {
  #FEED_URL = "https://pb.arcapi.nl/api/collections/psa/records";
  #psaAvailable = false;
  #items: ParsedPsaItem[] = [];

  public get PsaAvailable() {
    return this.#psaAvailable;
  }

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  async _init(): Promise<void> {
    await this.Refresh();
  }

  async Refresh() {
    this.isKmod();
    Kernel.LogOperation("kmod", "psa", "Refresh");

    try {
      const response = await axios.get<PsaResponse>(this.#FEED_URL, {
        params: { perPage: 1000 },
        responseType: "json",
      });

      this.#items = response.data.items.map((item) => this.RawToParsed(item));
      this.#psaAvailable = true;
    } catch (e) {
      this.#psaAvailable = false;
    }
  }

  public RawToParsed(item: RawPsaItem): ParsedPsaItem {
    this.isKmod();
    Kernel.LogOperation("kmod", "psa", "RawToParsed");

    return {
      id: item.id,
      affectedService: item.affectedService,
      showIn: this.ParseRawShowIn(item.showIn),
      message: item.message,
      longMessage: item.longMessage,
      severity: this.RawSeverityToSeverity(item.severity),
      severityStr: item.severity.toLowerCase(),
      createdBy: item.createdBy,
      validUntil: new Date(item.validUntil),
      created: new Date(item.created),
      updated: new Date(item.updated),
    };
  }

  public GetPsaFor(area: string, location?: string): ParsedPsaItem | undefined {
    Kernel.LogOperation("kmod", "psa", "GetPsaFor");

    return this.#items.find(
      (item) =>
        !!item.showIn.find((showIn) => {
          if (location && showIn.location !== location) return false;
          if (area && showIn.area !== area) return false;

          return Date.now() < item.validUntil.getTime();
        })
    );
  }

  public RawSeverityToSeverity(rawSeverity: string): PsaSeverity {
    Kernel.LogOperation("kmod", "psa", "RawSeverityToSeverity");

    switch (rawSeverity.toLowerCase().trim()) {
      case "medium":
        return PsaSeverity.Medium;
      case "high":
        return PsaSeverity.High;
      case "critical":
        return PsaSeverity.Critical;
      case "low":
      default:
        return PsaSeverity.Low;
    }
  }

  public ParseRawShowIn(showIn: string): PsaShowIn[] {
    Kernel.LogOperation("kmod", "psa", "ParseRawShowInF");

    return showIn
      .split(",")
      .map((i) => i.trim().split(":").filter(Boolean))
      .map(([area, location]) => ({ area, location }));
  }
}
