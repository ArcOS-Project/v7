import type { App } from "./app";
import type { FileHandler } from "./fs";

export interface FileDefinition {
  friendlyName: string;
  icon: string; // maybeIconId()
}

export interface FileAssociationConfig {
  associations: {
    apps: Record<string, string[]>;
    handlers: Record<string, string[]>;
  };
  definitions: Record<string, FileDefinition>;
}

export interface BaseFileAssociationInfo {
  extension: string;
  handledBy?: {
    app?: string;
    handler?: string;
  };
  icon?: string;
  friendlyName?: string;
}

export interface ExpandedFileAssociationInfo {
  extension: string;
  handledBy: {
    app?: App;
    handler?: FileHandler;
  };
  icon: string;
  friendlyName: string;
}
