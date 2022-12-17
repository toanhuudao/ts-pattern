import { CloudEmailProvider } from "./cloudEmailProvider.interface";
import { EmailOptions, EmailProvider, EmailResponse } from "./emailProvider.interface";

class CloudEmailAdapter implements EmailProvider {
    constructor(public emailProvider: CloudEmailProvider) {}
    async sendMail(options: EmailOptions): Promise<EmailResponse> {
      const result = this.emailProvider.send(options);
      return result;
    }
  }

  export default CloudEmailAdapter;