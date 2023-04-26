import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthStrategy } from "./auth-strategy";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { UserRepository } from "src/user/user.repository";
import { PrismaService } from "src/prisma/prisma.service";


@Module({
    imports:[PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    })],
    controllers:[AuthController],
    providers:[AuthService, AuthStrategy, UserService, UserRepository, PrismaService],
    exports:[AuthStrategy, AuthService]
})
export class AuthModule {}