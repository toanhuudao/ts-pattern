interface EmailProvider {
    sendMail(options: EmailOptions): Promise<EmailResponse>;
  }
  interface EmailOptions {
    to: string | string[];
    subject: string;
    html: string;
    from?: string;
    text?: string;
  }
  interface EmailResponse {}

  export { EmailOptions, EmailResponse, EmailProvider };
