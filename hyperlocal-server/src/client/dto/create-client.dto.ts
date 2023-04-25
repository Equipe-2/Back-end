import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
    @ApiProperty()
    systemId: number; 

    @ApiProperty()
    name: string;

    @ApiProperty()
    endDate?: Date; 
}
