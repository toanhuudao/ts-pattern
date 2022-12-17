import CloudEmailAdapter from "./cloudEmailAdapter";
import EmailService from "./emailService";
import SendgridEmailProvider from "./sendgridEmailProvider";

const sendgridMail = new SendgridEmailProvider({
    apiKey: "******",
    from: "bytefer@gmail.com",
  });
  const cloudEmailAdapter = new CloudEmailAdapter(sendgridMail);
  const emailService = new EmailService(cloudEmailAdapter);
  emailService.sendMail({
    to: "******",
    subject: "Adapter Design Pattern",
    html: "<h3>Adapter Design Pattern</h3>",
    from: "bytefer@gmail.com",
  });