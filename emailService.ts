import { EmailOptions, EmailProvider, EmailResponse } from "./emailProvider.interface";

class EmailService {
    constructor(public emailProvider: EmailProvider) {}
    async sendMail(options: EmailOptions): Promise<EmailResponse> {
      const result = await this.emailProvider.sendMail(options);
      return result;
    }
  }

  export default EmailService;