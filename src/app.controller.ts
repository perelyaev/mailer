import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('mail')
  sendMail(
    @Body() sendMailDto: { email: string; subject: string; text: string },
  ) {
    this.mailService.sendMail({ ...sendMailDto });

    return 'Email sent successfully';
  }
}
