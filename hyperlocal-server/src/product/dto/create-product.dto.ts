import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty({
    description: "product name",
    default: "HYPERLOCAL BANK WOW"
  })
  name: string;

  @ApiProperty({
    description: "Product segment",
    default: "PAYMENTS"
  })
  plan: string;

  @ApiProperty({
    description: "Product description",
    default: "HYPERLOCAL BANK WOW (NOVO CREDENCIAMENTO WOW)"
  })
  description: string;

  @ApiProperty({
    description: "Product score value",
    default: 13
  })
  score: number;

  @ApiProperty({
    description: "Product price",
    default: 1000.00
  })
  price: number;

  @ApiProperty({
    description: "Product start date"
  })
  startDate: Date;

  @ApiPropertyOptional({
    description: "Product end date (this filed is optional)"
  })
  endDate?: Date;
};
