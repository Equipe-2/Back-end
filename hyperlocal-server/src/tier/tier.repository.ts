import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTierDto } from "./dto/create-tier.dto";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions } from "src/utils/exceptions/exceptionHandler";
import { ITier } from "./entities/tier.entity";


@Injectable()
export class TierRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createTierDto: ITier): Promise<ITier> {
        try {
            const createdTier = await this.prisma.tier.create({
                data: createTierDto,
            })
            return createdTier;
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException);
        }
    }
}