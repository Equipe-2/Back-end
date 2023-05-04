import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "User email",
    default: "rafaela@gmail.com"
  })
  email: string;

  @ApiProperty({
    description: "User Password",
    default: "I@mG4;1"
  })
  password: string;

  @ApiProperty({
    description: "User name",
    default: "Rafaela"
  })
  name: string;

  @ApiProperty({
    description: "User role",
    default: "admin"
  })
  role: string;
}
