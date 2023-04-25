import { ApiProperty } from "@nestjs/swagger";

export class CreateTierDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    scoreMin: number; 

    @ApiProperty()
    scoreMax: number;

    @ApiProperty()
    percentageSaas: number;

    @ApiProperty()
    percentageMDR: number;
}
