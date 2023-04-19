import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserLoginDto } from "./dto/user-login.dto";
import { AuthService } from "./auth.service";
import { HandleException } from "src/utils/exceptions/exceptionHandler";

 @Controller('auth')
 @ApiTags('Authorization') 
 export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() userData: UserLoginDto){
        try {
            return await this.authService.validateUser(userData);
        } catch (error) {
            HandleException(error)
        }
    }
}