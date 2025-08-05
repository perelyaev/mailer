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

  sendMail({ email, subject, text }: SendMailConfiguration): void {
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

  getMail(): void {
    this.mailerService
      .sendMail({
        from: 'WishList',
        to: 'perelyaev@gmail.com',
        subject: 'Test',
        text: 'Test',
      })
      .then(() => {})
      .catch(() => {});
  }
}
