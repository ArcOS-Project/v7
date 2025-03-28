import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { join } from "$ts/fs/util";
import { CameraIcon } from "$ts/images/apps";
import { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import dayjs from "dayjs";
import { CameraAltMenu } from "./altmenu";

export class CameraRuntime extends AppProcess {
  videoFeed = Store<HTMLVideoElement>();
  canvas = Store<HTMLCanvasElement>();
  stream: MediaStream | undefined;
  devices = Store<MediaDeviceInfo[]>([]);
  sourceSelect = Store<string>();

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    const preferences = this.userPreferences();
    const preferredSource = preferences.appPreferences[this.app.id].source;

    if (preferredSource) this.sourceSelect.set(preferredSource);

    this.sourceSelect.subscribe((v) => {
      this.userPreferences.update((u) => {
        u.appPreferences[this.app.id].source = v;
        this.changeCamera(v);

        return u;
      });
    });
  }

  async render() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const source = this.sourceSelect();

    this.devices.set(devices);

    if (source) this.changeCamera(source);

    this.altMenu.set(CameraAltMenu(this));
  }

  async changeCamera(deviceId: string) {
    try {
      const devices = this.devices();
      const device = devices.filter((d) => d.deviceId === deviceId)[0];

      if (!device || device.kind !== "videoinput") throw `Unrecognized device with ID ${deviceId}`;

      this.stream?.getTracks().forEach((t) => t.stop());
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId }, audio: false });
      this.videoFeed()!.srcObject = this.stream;
    } catch (e) {
      this.cameraChangeFailed(e);
    }
  }

  async Capture() {
    try {
      const canvas = document.createElement("canvas");
      const videoFeed = this.videoFeed();

      canvas.width = videoFeed.videoWidth;
      canvas.height = videoFeed.videoHeight;

      const ctx2d = canvas.getContext("2d");

      ctx2d?.drawImage(videoFeed, 0, 0, canvas.width, canvas.height);

      const blob = await new Promise<Blob | null>((r) => canvas.toBlob((b) => r(b)));
      if (!blob) throw "Failed to retrieve blob from canvas";

      const filename = join(await this.getSaveLocation(), dayjs().format(`[Photo_]DD-MM-YYYY_HHmmss[.png]`));
      const written = await this.fs.writeFile(filename, blob!);

      if (!written) throw "Failed to save the image!";

      this.userDaemon?.openFile(filename);
    } catch (e) {
      this.captureFailed(e);
    }
  }

  captureFailed(e: any) {
    MessageBox(
      {
        title: "The shutter broke",
        message: `ArcOS was unable to capture an image from your camera. Maybe try selecting a different source?<br><br>Technical details: ${e}`,
        buttons: [{ caption: "Okay", action() {}, suggested: true }],
        image: CameraIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  cameraChangeFailed(e: any) {
    MessageBox(
      {
        title: "Well this is awkward",
        message: `ArcOS was unable to change to the camera you requested. Maybe try selecting a different one?<br><br>Technical details: ${e}`,
        buttons: [{ caption: "Okay", action() {}, suggested: true }],
        image: CameraIcon,
        sound: "arcos.dialog.warning",
      },
      this.pid,
      true
    );
  }

  async changeSaveLocation() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Choose save location",
      icon: CameraIcon,
      folder: true,
      startDir: "U:/",
    });

    if (!path) return;

    this.userPreferences.update((v) => {
      v.appPreferences[this.app.id].saveLocation = path;

      return v;
    });
  }

  async getSaveLocation() {
    const location = this.userPreferences().appPreferences[this.app.id].saveLocation || "U:/Pictures";

    await this.fs.createDirectory(location);

    return location;
  }

  async onClose() {
    this.stream?.getTracks().forEach((t) => t.stop());

    return true;
  }

  async openFileLocation() {
    this.spawnApp("fileManager", this.parentPid, await this.getSaveLocation());
  }
}
