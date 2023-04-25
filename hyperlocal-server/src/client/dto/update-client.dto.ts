import { PartialType } from '@nestjs/mapped-types';

class UpdateClient {
    systemId: number; 

    name: string;

    startDate: Date;

    endDate: Date; 
}

export class UpdateClientDto extends PartialType(UpdateClient) {
    id: string
}
