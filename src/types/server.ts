export interface ServerInfo {
  validation: string;
  status: string;
  loginWallpaper: boolean;
  loginBottomText: string;
  loginNotice: string;
  disableRegistration: boolean;
  freshBackend: boolean;
  rejectTargetedAuthorization: boolean;
  noEmailVerify: boolean;
}

export interface ServerOption {
  url: string;
  authCode?: string;
  name?: string;
  system?: boolean;
  icon?: string;
}