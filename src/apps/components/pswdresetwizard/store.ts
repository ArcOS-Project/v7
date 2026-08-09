import type { IPswdResetWizardRuntime } from "$interfaces/runtimes/IPswdResetWizardRuntime";
import EnterUsername from "./Pages/EnterUsername.svelte";
import NewPassword from "./Pages/NewPassword.svelte";
import RestartFirst from "./Pages/RestartFirst.svelte";
import Verification from "./Pages/Verification.svelte";
import type { PswdResetPage } from "./types";

export function PswdResetPages(runtime: IPswdResetWizardRuntime): Record<string, PswdResetPage & { disabled?: boolean }> {
  return {
    restartFirst: {
      component: RestartFirst as any,
      buttons: [
        {
          caption: "Cancel",
          action: () => {
            runtime.closeWindow();
          },
        },
        {
          caption: "Restart ArcOS",
          action: () => {
            runtime.closeWindow();
            runtime.LoginRuntime.PerformRestart();
          },
          suggested: true,
        },
      ],
    },
    enterUsername: {
      component: EnterUsername as any,
      buttons: [
        {
          caption: "Cancel",
          action: () => {
            runtime.closeWindow();
          },
        },
        {
          caption: "Send email",
          action: () => {
            runtime.DoSendEmail();
          },
          suggested: true,
        },
      ],
    },
    verification: {
      component: Verification as any,
      buttons: [
        {
          caption: "Cancel",
          disabled: true as any,
          action: () => {},
        },
        {
          caption: "Verify",
          suggested: true,
          action: () => runtime.DoVerify(),
        },
      ],
    },
    newPassword: {
      component: NewPassword as any,
      buttons: [
        {
          caption: "Cancel",
          action: () => {
            runtime.closeWindow();
          },
        },
        {
          caption: "Change password",
          action: () => {
            runtime.DoChangePassword();
          },
          suggested: true,
        },
      ],
    },
  };
}
