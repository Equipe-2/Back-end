import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { UserLoginDto } from "./dto/user-login.dto";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptionHandler";
import { compare } from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import { IUser } from "src/user/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(private readonly userSevice: UserService, private readonly jwtService: JwtService) {}

    async validateUser(userData: UserLoginDto) {
        const user = await this.userSevice.findByEmail(userData.email);

        if(!user){
            throw new Exception(Exceptions.UnauthorizedException, "Invalid email or password");
        }

        const passwordValid = await compare(userData.password, user.password);
        if(!passwordValid) {
            throw new Exception(Exceptions.UnauthorizedException, "Invalid email or password");
        }

        delete user.password

        return {token: this.jwtService.sign({
            id: user.id,
            name: user.name,
            role: user.role
        }), user}
    }

    async getUser(id: string): Promise<IUser> {
        const user = await this.userSevice.findOne(id);
        return user;
      }
}