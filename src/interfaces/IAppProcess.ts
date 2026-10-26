import type { AppKeyCombinations } from "$types/apps/accelerator";
import type { AppContextMenu, AppProcessData, AppProcessSpawnOptions, ContextMenuItem, ToastMessage } from "$types/apps/app";
import type { MaybePromise } from "$types/shared/common";
import type { ReadableStore } from "$types/shared/writable";
import type { RenderArgs } from "$types/system/process";
import type { UserPreferences } from "$types/user";
import type { Draggable } from "@neodrag/vanilla";
import type { Constructs } from "./common";
import type { IProcess } from "./IProcess";
import type { IApplicationStorage } from "./services/IApplicationStorage";

// !tpa
/**
 * The interface for an App Process. App processes are processes that are picked up by the app renderer to render an application to the DOM.
 * @extends {IProcess}
 */
export interface IAppProcess extends IProcess {
  /**
   * The property that will contain the reason for a crash if it occurs. Empty by default.
   */
  crashReason: string;
  /**
   * A store that contains the title of the window.
   */
  windowTitle: ReadableStore<string>;
  /**
   * A store that contains the icon of the window.
   */
  windowIcon: ReadableStore<string>;
  /**
   * The application process data that contains everything ArcOS needs to know about the process and its application
   */
  app: AppProcessData;
  /**
   * Svelte component mount information. Obscure and only relevant for first-party applications
   */
  componentMount: Record<string, any>;
  /**
   * The user's preferences, passed on from places like the User Daemon. When updated, the preferences are synced back to the server. Do not perform time-sensitive operations between getting and setting preferences, as the preferences may be updated in the meantime and can cause the preferences to fall back to an older state.
   */
  userPreferences: ReadableStore<UserPreferences>;
  /**
   * The name of the user
   */
  username: string;
  /**
   * Whether or not to force the process to be rendered on the taskbar
   */
  overridePopulatable: boolean;
  /**
   * A store that contains the data of the currently visible toast message.
   */
  toastMessage: ReadableStore<ToastMessage | undefined>;
  /**
   * Whether or not ArcOS is running in Safe Mode.
   */
  safeMode: boolean;
  /**
   * A record of values that can be passed on from the process constructor to the render method.
   */
  renderArgs: RenderArgs;
  /**
   * The application's loaded keyboard combinations
   */
  acceleratorStore: AppKeyCombinations;
  /**
   * The context menu definitions of the process
   */
  readonly contextMenu: AppContextMenu;
  /**
   * A store containing the menu items to be displayed in the titlebar
   */
  altMenu: ReadableStore<ContextMenuItem[]>;
  /**
   * A store determining if the window is fullscreen or not
   */
  windowFullscreen: ReadableStore<boolean>;
  /**
   * The Neodrag instance that belongs to the window's dragging mechanism
   */
  draggable: Draggable | undefined;
  /**
   * A store determining whether or not to blink the window's corresponding taskbar button
   */
  blinking: ReadableStore<boolean>;
  /**
   * A conditional method determining if the window is allowed to close. If it gives back `false`, the application window can't close unless the close operation is forced.
   */
  onClose(): Promise<boolean>;
  /**
   * A helper method to display a toast message in this process' window
   * @param {ToastMessage} toast The toast message to display
   * @param {number} durationMs How long to display the toast message for
   */
  ShowToast(toast: ToastMessage, durationMs?: number): Promise<void>;
  /**
   * A helper method to hide the currently active toast message
   */
  HideToast(): Promise<void>;
  /**
   * Closes the application window
   * @param {boolean} kill Whether or not to invoke {@link IProcess.killSelf} after the closing operation is complete. Whether or not this is necessary depends on the way in which this method was invoked. Default is `true`.
   */
  closeWindow(kill?: boolean): Promise<boolean | void>;
  /**
   * A method that is called AFTER the application has been rendered and added to the DOM. Helper methods like {@link IAppProcess.getWindow} and {@link IAppProcess.getBody} will not work before this method has been called.
   * @param {RenderArgs} args The arguments passed on from the process constructor
   */
  render(args: RenderArgs): MaybePromise<any>;
  /**
   * An internal method that will be called by the App Renderer when it's time to render the application.
   * @param {HTMLDivElement} body The body's HTML element provided by the renderer
   */
  __render__(body: HTMLDivElement): Promise<void>;
  /**
   * An internal method called by the App Render after the application has been rendered. Its goal is to throw a potential error message when it occurs, so that the app renderer can handle the error properly.
   */
  CrashDetection(): Promise<void>;
  /**
   * Returns an array of instances of the application
   * @returns {this[]}
   */
  getSingleton(): this[];
  /**
   * A method that closes the application window if another instance of the same application is running.
   * Should be called in {@link IAppProcess.render}.
   * @throws {AppRuntimeError} When called in the wrong process state ({@link IProcess.STATE}).
   */
  closeIfSecondInstance(): Promise<this | undefined>;
  /**
   * A method that returns the window element of the application
   * @throws {AppRuntimeError} When called in the wrong process state ({@link IProcess.STATE}).
   */
  getWindow(): HTMLDivElement;
  /**
   * A method that returns the window body of the application
   * @throws {AppRuntimeError} When called in the wrong process state ({@link IProcess.STATE}).
   */
  getBody(): HTMLDivElement;
  /**
   * Returns if the window currently has any overlays opened on top of it.
   */
  hasOverlays(): boolean;
  /**
   * Starts the keyboard event listener for the process.
   */
  startKeyboardShortcutListener(): void;
  /**
   * Stops the keyboard event listener for the process.
   */
  stopKeyboardShortcutListener(): void;
  /**
   * Blurs the currently focused DOM element inside ArcOS
   */
  unfocusActiveElement(): void;
  /**
   * Spawns an overlay from the current application's internal registry of overlays. This differs from {@link IAppProcess.spawnOverlayApp}: that method uses the user's installed applications instead.
   * @param {string} id The application-defined overlay to spawn
   * @param {any[]} args Process arguments to pass to the child
   * @returns {T | undefined} The process, or undefined if it failed to spawn, or if the application cannot be found.
   */
  spawnOverlay(id: string, ...args: any[]): Promise<boolean>;
  /**
   * Helper method to use the Stack to spawn an installed application.
   * @param {string} id The application ID of the app to spawn
   * @param {number | undefined} parentPid The parent PID of the application. Defaults to this process' PID
   * @param {any[]} args Process arguments to pass to the process
   */
  spawnApp<T extends IAppProcess = IAppProcess>(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  /**
   * Helper method to use the Stack to spawn an installed application AS OVERLAY.
   * @param {string} id The application ID of the app to spawn
   * @param {number | undefined} parentPid The parent PID of the application. Defaults to this process' PID
   * @param {any[]} args Process arguments to pass to the process
   */
  spawnOverlayApp<T extends IAppProcess = IAppProcess>(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  /**
   * Invokes the Secure Context using an elevation defined in the process.
   * @param {string} id The internal elevation ID to use
   */
  elevate(id: string): Promise<unknown>;
  /**
   * Returns the {@link IApplicationStorage} service instance. Should always be defined.
   */
  appStore(): IApplicationStorage;
  /**
   * Asynchronously returns a usable URL for the specified icon
   * @param {string} id The icon ID 
   */
  getIcon(id: string): Promise<string>;
  /**
   * Returns a usable URL for the specified icon from the IconService's cache
   * @param {string} id The icon ID 
   */
  getIconCached(id: string): string;
  /**
   * Returns a writable store that contains a usable URL for the specified icon from the IconService's cache
   * @param {string} id The icon ID
   */
  getIconStore(id: string): ReadableStore<string>;
  /**
   * Blinks the taskbar icon that belongs to the window
   */
  blink(): void;
}

/**
 * Static properties of the AppProcess class
 */
export interface IAppProcessConstructor extends Constructs<IAppProcess> {
  /**
   * Spawn options that can be used to override the spawn options that originate from the process handler (Stack).
   */
  spawnOptions?: AppProcessSpawnOptions;
}
// !endtpa
