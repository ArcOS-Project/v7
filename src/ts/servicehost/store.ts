import type { ServiceChangeResult } from "$types/service";

export const ServiceChangeResultCaptions: Record<ServiceChangeResult, string> = {
  err_noExist: "The specified service could not be found",
  err_alreadyRunning: "The service is already running",
  err_notRunning: "The service is not running",
  err_startCondition: "The start condition of the service failed",
  err_spawnFailed: "The service process failed to spawn",
  err_noManager: "The service manager could not be reached",
  err_elevation: "Elevation is required, but wasn't provided.",
  err_managerPaused: "The service manager is paused",
  success: "Service started successfully.",
};
