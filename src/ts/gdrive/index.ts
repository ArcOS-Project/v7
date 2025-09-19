/// <reference types="gapi.client.drive" />
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type { GoogleStoredCredentials } from "$types/gdrive";
import type { Service } from "$types/service";
import { gapi } from "gapi-script";

export class GoogleDriveIntegration extends BaseService {
  scriptTag?: HTMLScriptElement;
  private readonly STORAGE_KEY = "google_drive_credentials";
  private readonly SCOPES = "https://www.googleapis.com/auth/drive";
  private ready = false;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);
  }

  protected async start(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      gapi.load("client:auth2", async () => {
        try {
          await gapi.client.init({
            apiKey: import.meta.env.DW_GOOGLE_API_KEY,
            clientId: import.meta.env.DW_GOOGLE_CLIENT_ID,
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
            scope: this.SCOPES,
          });
          this.ready = true;
          resolve(true);
        } catch (e) {
          resolve(false);
        }
      });
    });
  }

  async stop() {
    this.ready = false;
    this.scriptTag?.remove();
    (window as any).gapi = null;
  }

  //#endregion

  private async loadCredentials() {
    try {
      const savedCredentialsStr = arrayToText((await this.fs.readFile(join(UserPaths.System, "GoogleDriveCred.json")))!);
      if (!savedCredentialsStr) return false;

      const savedCredentials: GoogleStoredCredentials = JSON.parse(savedCredentialsStr);
      const isExpired = Date.now() > savedCredentials.expires_at - 5 * 60 * 1000;

      if (isExpired) return false;

      const authInstance = gapi?.auth2.getAuthInstance();
      const currentUser = authInstance?.currentUser.get();

      const authResponse: GoogleStoredCredentials = {
        access_token: savedCredentials.access_token,
        id_token: savedCredentials.id_token,
        scope: savedCredentials.scope,
        expires_at: Math.floor((savedCredentials.expires_at - Date.now()) / 1000),
      };

      await this.saveCredentials(authResponse);

      currentUser?.reloadAuthResponse().then(() => {
        gapi?.client.setToken({
          access_token: savedCredentials.access_token,
        });
      });
    } catch {
      return false;
    }
  }

  private async saveCredentials(credential: GoogleStoredCredentials) {
    try {
      await this.fs.writeFile(join(UserPaths.System, "GoogleDriveCred.json"), textToBlob(JSON.stringify(credential, null, 2)));

      return true;
    } catch {
      return false;
    }
  }

  private async clearCredentials() {
    await this.fs.deleteItem(join(UserPaths.System, "GoogleDriveCred.json"));
  }

  async signIn(rememberMe = true): Promise<boolean> {
    const authInstance = gapi?.auth2.getAuthInstance()!;

    if (authInstance.isSignedIn.get()) {
      const currentUser = authInstance.currentUser.get();
      const authResponse = currentUser.getAuthResponse(true);

      if (rememberMe && authResponse) {
        await this.saveCredentials(authResponse);
      }
      return true;
    }

    try {
      const user = await authInstance.signIn({
        prompt: "consent",
      });

      const authResponse = user.getAuthResponse(true);

      if (rememberMe && authResponse) {
        await this.saveCredentials(authResponse);
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  async signOut(): Promise<void> {
    try {
      const authInstance = gapi?.auth2.getAuthInstance();
      await authInstance?.signOut();
      this.clearCredentials();
    } catch (error) {}
  }

  isSignedIn(): boolean {
    const authInstance = gapi?.auth2.getAuthInstance();
    const isSignedIn = authInstance?.isSignedIn.get();

    if (!isSignedIn) {
      const savedCredentials = localStorage.getItem(this.STORAGE_KEY);
      if (savedCredentials) {
        try {
          const credentials: GoogleStoredCredentials = JSON.parse(savedCredentials);
          const isExpired = Date.now() > credentials.expires_at;
          return !isExpired;
        } catch {
          this.clearCredentials();
          return false;
        }
      }
    }

    return !!isSignedIn;
  }

  async refreshTokenIfNeeded(): Promise<boolean> {
    try {
      const authInstance = gapi?.auth2.getAuthInstance();
      const currentUser = authInstance?.currentUser.get();

      if (!currentUser?.isSignedIn()) return false;

      const authResponse = currentUser.getAuthResponse(true);
      const isExpired = Date.now() > authResponse.expires_at - 5 * 60 * 1000; // 5 min buffer

      if (isExpired) {
        const newAuthResponse = await currentUser.reloadAuthResponse();
        this.saveCredentials(newAuthResponse);
        return true;
      }

      return true;
    } catch (error) {
      this.clearCredentials();
      return false;
    }
  }

  async listFiles(pageSize: number = 10): Promise<gapi.client.drive.File[]> {
    const tokenValid = await this.refreshTokenIfNeeded();
    if (!tokenValid) {
      throw new Error("Authentication required");
    }

    const response = await gapi?.client.drive.files.list({
      pageSize,
      fields: "files(id,name,mimeType,size,modifiedTime)",
    });

    return response.result.files || [];
  }

  async downloadFile(fileId: string): Promise<Blob> {
    const tokenValid = await this.refreshTokenIfNeeded();
    if (!tokenValid) {
      throw new Error("Authentication required");
    }

    const response = await gapi.client.drive.files.get({
      fileId,
      alt: "media",
    });

    const binaryString = atob(response.body);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return new Blob([bytes]);
  }

  // Get current user info
  async getCurrentUser(): Promise<any> {
    const authInstance = gapi.auth2.getAuthInstance();
    const currentUser = authInstance.currentUser.get();

    if (!currentUser.isSignedIn()) return null;

    const profile = currentUser.getBasicProfile();
    return {
      id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl(),
    };
  }

  async hasStoredCredentials(): Promise<boolean> {
    try {
      const savedCredentials = arrayToText((await this.fs.readFile(join(UserPaths.System, "GoogleDriveCred.json")))!);
      if (!savedCredentials) return false;

      const credentials: GoogleStoredCredentials = JSON.parse(savedCredentials);
      const isExpired = Date.now() > credentials.expires_at;

      return !isExpired;
    } catch {
      return false;
    }
  }
}

const gdriveService: Service = {
  name: "GoogleDriveSvc",
  description: "Enables google drive integration",
  process: GoogleDriveIntegration,
};

export default gdriveService;
