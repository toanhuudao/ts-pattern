import { EmailOptions, EmailResponse } from "./emailProvider.interface";

interface CloudEmailProvider {
    send(options: EmailOptions): Promise<EmailResponse>;
  }

  export {CloudEmailProvider}