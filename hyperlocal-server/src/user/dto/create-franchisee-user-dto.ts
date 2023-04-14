import { ApiProperty } from '@nestjs/swagger';
import { CNPJ } from 'src/utils/decorators/cnpj.decorator';

export class CreateFranchiseeUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  personalEmail: string;

  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  address: string;
}
