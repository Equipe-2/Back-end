import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateClientDto {
    @ApiProperty()
    systemId: number; 

    @ApiProperty()
    name: string;

    @ApiPropertyOptional()
    endDate?: Date; 
}
