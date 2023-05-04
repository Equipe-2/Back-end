import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserLoginDto {
    @ApiProperty({
        description: "User email"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "User password"
    })
    password: string;
}