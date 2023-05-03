import { PartialType } from '@nestjs/mapped-types';

class UpdateCustomer {
    systemId: number; 

    name: string;

    startDate: Date;

    endDate: Date; 
}

export class UpdateCustomerDto extends PartialType(UpdateCustomer) {
    id: string
}
