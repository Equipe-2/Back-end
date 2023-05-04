import { ApiProperty } from "@nestjs/swagger";

export class CreateTierDto {
    @ApiProperty({
        description: "Tier name",
        default: "Tier 0"
    })
    name: string;

    @ApiProperty({
        description: "Minimum score to get in the tier",
        default: 0
    })
    scoreMin: number; 

    @ApiProperty({
        description: "Maximum score of the tier",
        default: 35
    })
    scoreMax: number;

    @ApiProperty({
        description: "The percentage of Saas the franchisee gets",
        default: 0.16
    })
    percentageSaas: number;

    @ApiProperty({
        description: "The percentage of MDR the franchisee gets",
        default: 0.15
    })
    percentageMDR: number;
}
