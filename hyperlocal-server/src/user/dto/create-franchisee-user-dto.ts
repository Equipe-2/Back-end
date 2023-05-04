import { ApiProperty } from '@nestjs/swagger';

export class CreateFranchiseeUserDto {
  @ApiProperty({
    description: "Franchisee name",
    default: "Jõao"
  })
  name: string;

  @ApiProperty({
    description: "Franchisee email",
    default: "xxx@gmail.com"
  })
  personalEmail: string;

  @ApiProperty({
    description: "Franchisee CNPJ",
    default: "45.879.135/0001-07"
  })
  cnpj: string;

  @ApiProperty({
    description: "Franchisee phone number",
    default: "981980006"
  })
  phoneNumber: string;

  @ApiProperty({
    description: "Franchisee city",
    default: "São Paulo"
  })
  city: string;

  @ApiProperty({
    description: "Franchisee address",
    default: "Rua da Graça, 5"
  })
  address: string;
}
