export namespace MailbrokerSendOverlay {
  export interface Property {
    name: string;
    variant: PropertyVariant;
    isUser: boolean;
  }

  export enum PropertyVariant {
    Unknown,
    Username,
    UserId,
    Url
  }
}