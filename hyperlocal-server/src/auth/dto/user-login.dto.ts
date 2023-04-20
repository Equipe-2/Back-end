import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserLoginDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;
}