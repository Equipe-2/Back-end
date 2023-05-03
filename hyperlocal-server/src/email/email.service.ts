import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
constructor( private readonly mailerService: MailerService){}
    
    async sendFranchiseeWelcomeMail(franchiseeEmail: string, password:string){
        const mailOptions = {
            from: 'mathmasca@gmail.com',
            to: franchiseeEmail,
            subject: "Bem-Vindo a HyperFranquia",
            template: './welcome', 
      context: { 
        password: password,
        email: franchiseeEmail
      },
          };
        await this.mailerService.sendMail(mailOptions).catch((error) => {console.log(error)})
    return 
}
}