export interface ICustomer {
    id: string; 
    systemId: number; 
    franchiseeId: string;
    name: string;
    startDate: Date;
    endDate?: Date; 
}
