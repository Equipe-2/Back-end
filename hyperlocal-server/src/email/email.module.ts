import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './email.controller';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
    imports: [MailerModule.forRootAsync({
      useFactory: () => ({
          transport: {
            host: 'smtp-relay.sendinblue.com',
            port: 587,
            secure: false,
            auth: {
              user: 'mathmasca@gmail.com',
              pass: '5DIqjPdvUmraO6w1',
            },
          },
          preview: true,
          template: {
            dir: join(__dirname, '../email/templates/'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          }})})],
  providers: [EmailService],
  exports: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}