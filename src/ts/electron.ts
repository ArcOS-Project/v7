import type { LoginAppRuntime } from "$apps/core/loginapp/runtime";
import ElectronTitleBar from "$lib/ElectronTitleBar.svelte";
import { Daemon, Kernel, Stack } from "$ts/env";
import type { ArcTerminal } from "$ts/terminal";
import { mount } from "svelte";

export const IsElectron = () => !!(window as any)["electron"] && navigator.userAgent.includes("Electron");

function disableRoundedWindow(platform: NodeJS.Platform, disableRounding: boolean) {
  if (platform === "win32") {
    if (disableRounding) {
      document.body.classList.remove("rounded");
    } else {
      document.body.classList.add("rounded");
    }
  }
}

function hideTitleBar(titlebar: HTMLDivElement, hide: boolean) {
  if (hide) {
    titlebar.classList.add("hidden");
  } else {
    titlebar.classList.remove("hidden");
  }
}

export async function handleElectronInit() {
  if (IsElectron()) {
    // inform the electron process that native functions are available.
    electron!.supportIntegration();

    const platform = await electron!.getSystem();
    const isNative = await electron!.isNative();

    mount(ElectronTitleBar, { target: document.body });
    const titleBar = document.getElementById("electron-titlebar")! as HTMLDivElement;
    if (isNative) {
      hideTitleBar(titleBar, true);
    }

    document.body.classList.add("electron-app");
    if (platform === "win32") {
      document.body.classList.add("transparent");
    }

    disableRoundedWindow(platform, false);

    electron!.handleMaximize(async (isMaximized) => {
      disableRoundedWindow(platform, isMaximized);
    });

    electron!.handleFullscreen((isFullscreen) => {
      disableRoundedWindow(platform, isFullscreen);
      if (!isNative) {
        hideTitleBar(titleBar, isFullscreen);
      }
    });

    electron!.onPowerOff(async () => {
      if (!Kernel || !Kernel.state) {
        electron!.setCanClose(true);
        electron!.closeWindow();
        return;
      }

      switch (Kernel.state?.currentState) {
        case "desktop":
          await Daemon.power?.shutdown();
          break;

        case "boot":
        case "turnedOff":
          electron!.setCanClose(true);
          electron!.closeWindow();
          break;

        case "arcterm":
          function getSubProcesses(parentPid: number) {
            const subProcesses = Stack.getSubProcesses(parentPid);
            for (const [key, val] of subProcesses) {
              if (val.name === "ArcTerminal") {
                (val as ArcTerminal).processLine("exit");
                break;
              }

              getSubProcesses(key);
            }
          }

          getSubProcesses(Kernel.initPid);
          break;

        case "login":
          function getSubProcessess(parentPid: number) {
            const subProcesses = Stack.getSubProcesses(parentPid);
            for (const [key, val] of subProcesses) {
              if (val.name === "loginApp") {
                console.log(val);
                console.log((val as LoginAppRuntime).loadingStatus());
                if ((val as LoginAppRuntime).loadingStatus().length === 0) {
                  (val as LoginAppRuntime).shutdown();
                }
                break;
              }

              getSubProcessess(key);
            }
          }

          getSubProcessess(Kernel.initPid);
          break;
        default:
          console.log(`Couldn't handle state "${Kernel.state?.currentState}"`);
          break;
      }
    });
  }
}
