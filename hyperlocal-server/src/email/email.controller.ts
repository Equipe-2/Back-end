import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService){}

    @Get()
    async sendEmail(email: string, password: string){
        return await this.emailService.sendFranchiseeWelcomeMail(email, password)
    }
}
