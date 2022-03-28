import { AttachmentData, AttachmentParams, Mailgun } from 'mailgun-js';
import * as mailgun from 'mailgun-js';

export class MailgunInstance {
  protected readonly instance: Mailgun;

  constructor(apiKey: string, domain: string) {
    this.instance = new mailgun({ apiKey, domain });
  }

  public createAttachment({
    data,
    filename,
  }: AttachmentParams): AttachmentData {
    return new this.instance.Attachment({ data, filename });
  }
}
