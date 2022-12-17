import { MailService } from "@sendgrid/mail";
import { CloudEmailProvider } from "./cloudEmailProvider.interface";
import { EmailOptions, EmailResponse } from "./emailProvider.interface";
class SendgridEmailProvider implements CloudEmailProvider {
  private sendgridMail: MailService;
  constructor(
    private config: {
      apiKey: string;
      from: string;
    }
  ) {
    this.sendgridMail = new MailService();
    this.sendgridMail.setApiKey(this.config.apiKey);
  }
  async send(options: EmailOptions): Promise<EmailResponse> {
    // const result = await this.sendgridMail.send();
    return 2;
  }
}

export default SendgridEmailProvider;