export namespace Mailbroker {
  export interface MailKey {
    _id: string;
    serverName: string;
    value: string;
    disabled: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface MailLog {
    _id: string;
    code: string;
    message: string;
    details?: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface SentMail {
    _id: string;
    subject: string;
    textContent: string;
    htmlContent: string;
    keyId: string;
    to: SentMailRecipient;
    createdAt: string;
    updatedAt: string;
  }

  export interface SentMailRecipient {
    email: string;
    serverName?: string;
    username?: string;
  }

  export interface SentMailCreate {
    subject: string;
    keyId: string;
    textContent?: string;
    htmlContent: string;
    to: SentMailRecipient;
  }

  export interface MailTemplate {
    _id: string;
    name: string;
    htmlContent: string;
    textContent: string;
    subjectContent: string;
    fromSuffix: string;
    deprecated: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface MailTemplateCreate {
    name: string;
    htmlContent: string;
    textContent?: string;
    subjectContent?: string;
    fromSuffix?: string;
  }

  export type MailTemplateUpdate = Partial<MailTemplateCreate>;
}
