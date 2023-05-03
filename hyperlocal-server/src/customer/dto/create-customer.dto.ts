import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty({
        description: "The id that already exists in the database",
        default: 1
    })
    systemId: number; 

    @ApiProperty({
        description: "The company's name",
        default: "HairPalace"
    })
    name: string;

    @ApiPropertyOptional({
        description: "This parameter it's optional, it can be use to define when a client contract finished or will be finishing"
    })
    endDate?: Date; 
}
