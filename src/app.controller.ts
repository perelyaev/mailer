import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
  ) {}

  @Get('mail')
  sendMailer(@Res() response: Response) {
    const mail = this.mailService.getMail();

    return response.status(200).json({
      message: 'success',
      mail,
    });
  }

  @Post('mail')
  sendMail(
    @Body() sendMailDto: { email: string; subject: string; text: string },
  ) {
    this.mailService.sendMail({ ...sendMailDto });

    return 'Email sent successfully';
  }
}
