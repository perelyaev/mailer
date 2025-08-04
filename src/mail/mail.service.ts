import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface SendMailConfiguration {
  email: string;
  subject: string;
  text: string;
}

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendMail({ email, subject, text }: SendMailConfiguration): void {
    this.mailerService
      .sendMail({
        from: 'WishList',
        to: email,
        subject,
        text,
      })
      .then(() => {})
      .catch(() => {});
  }
}
