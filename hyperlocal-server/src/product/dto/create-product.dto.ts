import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  plan: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  score: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  startDate: Date;

  @ApiPropertyOptional()
  endDate?: Date;
};
