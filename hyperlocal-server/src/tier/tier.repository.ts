import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTierDto } from "./dto/create-tier.dto";
import { Exception } from "src/utils/exceptions/exception";
import { Exceptions, HandleException } from "src/utils/exceptions/exceptionHandler";
import { ITier } from "./entities/tier.entity";
import { UpdateTierDto } from "./dto/update-tier.dto";


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

    async findAll(): Promise<ITier[]>{
        try {
            const allTiers = await this.prisma.tier.findMany()
            return allTiers
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async findById(tierId: string): Promise<ITier>{
        try {
            const uniqueTier = await this.prisma.tier.findUnique({
                where: {id: tierId}
            })
            return uniqueTier
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }

    async update(updateTierDto: UpdateTierDto): Promise<ITier>{
        try {
            const updatedTier = await this.prisma.tier.update({
                where: {id: updateTierDto.id},
                data: updateTierDto
            })
            return updatedTier
        } catch (error) {
            throw new Exception(Exceptions.DatabaseException)
        }
    }
}